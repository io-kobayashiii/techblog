import * as ResponseTypes from '../types/ResponseTypes';
import { notFound } from 'next/navigation';

class ApiClient {
  baseUrl: string;
  headers: {
    headers: {
      'X-API-KEY': string;
    };
  };
  fetch: (path: string) => Promise<Response>;
  constructor() {
    this.baseUrl = 'https://for.microcms.io/api/v1/';
    this.headers = { headers: { 'X-API-KEY': process.env.API_KEY ?? '' } };
    this.fetch = (path: string) => fetch(this.baseUrl + path, this.headers);
  }
  async article(
    id: string
  ): Promise<ResponseTypes.ArticleResponseType | undefined> {
    try {
      const response = await this.fetch(`articles/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
      notFound();
    }
  }
  async articles(): Promise<ResponseTypes.ArticlesResponseType | undefined> {
    console.log(`ApiClient.articles`);
    try {
      const response = await this.fetch('articles?limit=100');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  }
  async categories(): Promise<
    ResponseTypes.CategoriesResponseType | undefined
  > {
    console.log(`ApiClient.categories`);
    try {
      const response = await this.fetch('categories?limit=100');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  }
}

const ApiClientInstance = new ApiClient();
export default ApiClientInstance;
