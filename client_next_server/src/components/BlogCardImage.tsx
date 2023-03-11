import { IArticle } from "@/types/interface/Article.interface";
import { IAuthor } from "@/types/interface/Author.interface";
import { ICategory } from "@/types/Category.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { articleImage } from "../../public";

interface IPropType {
  article: IArticle;
}

const BlogCardImage = ({ article }: IPropType) => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-indigo-900 text-white rounded-lg flex justify-between items-center h-64 p-10">
      <Link href="#">
        <span className="text-xl w-2/3 text-white font-bold after:content-[''] after:bg-emerald-500 after:block after:w-16 after:h-1 after:rounded-lg after:mt-4 cursor-pointer">
          {article.attributes.title}
        </span>
      </Link>
      <Image
        src={articleImage}
        alt=""
        className="opacity-50"
        width={80}
        height={80}
      />
    </div>
  );
};

export default BlogCardImage;
