import { IArticle } from "@/Interface/Article.interface";
import BlogCard from "./BlogCard";

interface IPropType {
  articles: {
    items: IArticle[];
  };
}

const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.items.map((article: any) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
