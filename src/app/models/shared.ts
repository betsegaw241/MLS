export interface ITimeStamp {
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
export interface IPageState {
  page: number | undefined;
  limit: number;
  id?:string;
}
