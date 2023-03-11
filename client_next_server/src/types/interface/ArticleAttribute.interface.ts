import { IAuthor } from "./Author.interface";
import { IImageData } from "./ImageData.interface";

export interface IArticleAttribute {
  title: string;
  body: string;
  slug: string;
  image: IImageData;
  createdAt: string;
  author: IAuthor;
  short_description: string;
}
