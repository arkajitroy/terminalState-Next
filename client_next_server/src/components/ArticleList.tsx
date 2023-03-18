import { IArticle } from "@/types/interface/Article.interface";
import BlogCard from "./BlogCard";
import BlogCardImage from "./BlogCardImage";

interface IPropType {
  articles: {
    items: IArticle[];
  };
}

const ArticleList = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-16">
      {articles.items.map((article, idx): any => {
        return (
          <div key={article.id}>
            {idx === 1 ? (
              <BlogCardImage article={article} />
            ) : (
              <BlogCard article={article} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
