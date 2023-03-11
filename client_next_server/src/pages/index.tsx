import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { AxiosResponse } from "axios";
import { fetchArticles, fetchCategories } from "@/utils/api";
import QueryString from "qs";

// types / interfaces
import { ICollectionResponse } from "@/types/interface/CollectionResponse.interface";
import { ICategory } from "@/types/interface/Category.interface";
import { IArticle } from "@/types/interface/Article.interface";

// components
import Tab from "@/components/Tab";
import ArticleList from "@/components/ArticleList";
import Pagination from "@/components/Pagination";
import { IPagination } from "@/types/interface/Pagination.interface";

// PropType Interface
export interface IPropType {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
    pagination: IPagination;
  };
}

const Home: NextPage<IPropType> = ({ categories, articles }: IPropType) => {
  const { page, pageCount } = articles.pagination;
  return (
    <div>
      <Head>
        <title>terminalState | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/code.ico" />
      </Head>

      {/* CATEGORIES-TABS */}
      <Tab categories={categories} />

      <h1 className="text-3xl font-normal">
        Welcome to the space of Million Coders
      </h1>

      {/* ARTICLES */}
      <ArticleList articles={articles} />

      <Pagination page={page} pageCount={pageCount} />
    </div>
  );
};

// server-side rendering

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const options = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    pagination: {
      page: query.page ? query.page : 1,
      pageSize: 1, // default : 25 (in strapi)
    },
  };
  const queryString = QueryString.stringify(options);
  console.log("queryString ", queryString);

  // CATEGORIES
  const { data: cateogories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  // ARTICLES
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(queryString);

  return {
    props: {
      categories: {
        items: cateogories.data,
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};

export default Home;
