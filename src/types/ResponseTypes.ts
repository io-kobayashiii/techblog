import * as GlobalTypes from './GlobalTypes';

export type CategoriesResponseType = {
  contents: GlobalTypes.CategoryType[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type ArticleResponseType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  body: string | null;
  categories: GlobalTypes.CategoryType[];
};

export type ArticlesResponseType = {
  contents: GlobalTypes.ArticleType[] | null;
  totalCount: number;
  offset: number;
  limit: number;
};
