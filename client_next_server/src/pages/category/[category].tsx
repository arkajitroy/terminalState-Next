import React from "react";
import Head from "next/head";
import QueryString from "qs";
import { GetServerSideProps } from "next";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";

import Tab from "@/components/Tab";
import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";

import { textFromSlug } from "@/utils/textFromSlug";
import { initialCapitalize } from "@/utils/initialCapitalize";
import { fetchArticles, fetchCategories } from "@/utils/api";

import { IArticle } from "@/types/interface/Article.interface";
import { IPagination } from "@/types/interface/Pagination.interface";
import { ICategory } from "@/types/interface/Category.interface";
import { ICollectionResponse } from "@/types/interface/CollectionResponse.interface";
import { debounce } from "@/utils/debounce";

interface IPropType {
  categories: {
    items: ICategory[];
    pagination: IPagination;
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
  slug: string;
}

const category = ({ categories, articles, slug }: IPropType) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { page, pageCount } = articles.pagination;
  const { category: categorySlug } = router.query;

  const formattedCategory = (slug: string) => {
    const category = textFromSlug(slug);
    return initialCapitalize(category);
  };

  const handleSearch = (query: string) => {
    router.push(`/category/${categorySlug}/?search=${query}`);
  };

  return (
    <div>
      <Head>
        <title>terminalState | {formattedCategory(slug)}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/code.ico" />
      </Head>
      <Tab
        categories={categories}
        handleOnSearch={debounce(handleSearch, 500)}
      />
      <ArticleList articles={articles} />
      <Pagination
        page={page}
        pageCount={pageCount}
        redirectURL={`/category/${categorySlug}`}
      />
    </div>
  );
};

// server rendering
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    filters: {
      category: {
        slug: query.category,
      },
    },
    pagination: {
      page: query.page ? query.page : 1,
      pageSize: 1, // default : 25 (in strapi)
    },
  };

  // query string
  const queryString = QueryString.stringify(options);

  // making request with the query string
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  const { data: cateogories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  return {
    props: {
      categories: {
        items: cateogories.data,
        pagination: cateogories.meta.pagination,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
      slug: query.category,
    },
  };
};

export default category;
