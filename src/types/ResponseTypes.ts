import * as ArticleTypes from './ArticleTypes';

export type CategoriesResponseType = {
  contents: ArticleTypes.CategoryType[];
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
  categories: ArticleTypes.CategoryType[];
};

export type ArticlesResponseType = {
  contents: ArticleTypes.ArticleType[] | null;
  totalCount: number;
  offset: number;
  limit: number;
};
