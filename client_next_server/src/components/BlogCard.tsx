import { IArticle } from "@/Interface/Article.interface";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { ICategory } from "@/Interface/Category.interface";

interface IPropType {
  article: IArticle;
}

const BACKEND_URL = process.env.API_BASE_URL;

const BlogCard = ({ article }: IPropType) => {
  const AUTHOR_IMAGE =
    article.attributes.author.data.attributes.avatar.data.attributes.formats
      .thumbnail.url;

  const AUTHOR_FIRST_NAME = article.attributes.author.data.attributes.firstname;
  const AUTHOR_LAST_NAME = article.attributes.author.data.attributes.lastname;

  return (
    <>
      <Link href="#">
        <h1 className="text-xl mb-2 text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer">
          {article.attributes.title}
        </h1>
        <span className="bg-blue-800 text-white w-fit py-0.5 pl-3 pr-3 rounded-full"></span>
        {/* INFORMATION-SECTION */}
        <div className="flex items-center my-4">
          <div className="mr-4 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src={`http://127.0.0.1:1337${AUTHOR_IMAGE}`}
              alt=""
              height={20}
              width={20}
            />
          </div>
          <span className="text-sm font-bold text-gray-600 mr-4">
            {AUTHOR_FIRST_NAME} {AUTHOR_LAST_NAME}
          </span>
          <span className="text-gray-400">
            {formatDate(article.attributes.createdAt)}
          </span>
        </div>
        {/* BLOG-BODY-SECTION */}
        <p className="text-justify text-gray-500">
          {article.attributes.short_description.slice(0, 250)}
        </p>
      </Link>
    </>
  );
};

export default BlogCard;
