import React from "react";
import Head from "next/head";
import Tab from "@/components/Tab";
import { GetServerSideProps } from "next";
import { AxiosResponse } from "axios";
import { ICollectionResponse } from "@/types/interface/CollectionResponse.interface";
import { ICategory } from "@/types/interface/Category.interface";
import { fetchArticles, fetchCategories } from "@/utils/api";
import { IPagination } from "@/types/interface/Pagination.interface";
import QueryString from "qs";
import { IArticle } from "@/types/interface/Article.interface";
import ArticleList from "@/components/ArticleList";
import { textFromSlug } from "@/utils/textFromSlug";
import { initialCapitalize } from "@/utils/initialCapitalize";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";

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
  const formattedCategory = (slug: string) => {
    const category = textFromSlug(slug);
    return initialCapitalize(category);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { page, pageCount } = articles.pagination;
  const { category: categorySlug } = router.query;

  return (
    <div>
      <Head>
        <title>terminalState | {formattedCategory(slug)}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/code.ico" />
      </Head>
      <Tab categories={categories} />
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
