import { IResourceMeta } from "./ResourceMeta.interface";

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}
