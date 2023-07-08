import { ArticleType, CategoryType } from '@/types/ArticleTypes';
import * as ResponseTypes from '../types/ResponseTypes';

const baseUrl = 'https://for.microcms.io/api/v1/';
const headers = {
  headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY ?? '' },
};
const request = async <T>(path: string): Promise<T> => {
  const response = await fetch(baseUrl + path, headers);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  return data as T;
};

export const getArticle = async (id: string): Promise<ArticleType | null> => {
  return request<ResponseTypes.ArticleResponseType>(`articles/${id}`);
};

export const getAllArticles = async (
  limit = 10,
  offset = 0
): Promise<ArticleType[] | null> => {
  const data = await request<ResponseTypes.ArticlesResponseType>(
    `articles?limit=${limit}&offset=${offset}`
  );
  if (data.contents === null) return null;

  if (data.offset + data.limit < data.totalCount) {
    const additionalFetchedContents = await getAllArticles(
      data.limit,
      data.offset + data.limit
    );
    if (!additionalFetchedContents) return data.contents;
    return [...data.contents, ...additionalFetchedContents];
  }

  return data.contents;
};

export const getCategories = async (): Promise<CategoryType[] | null> => {
  const { contents } = await request<ResponseTypes.CategoriesResponseType>(
    'categories?limit=100'
  );
  return contents;
};
