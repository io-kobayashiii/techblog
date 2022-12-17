import * as ResponseTypes from '../types/ResponseTypes';

class ApiRequests {
  baseUrl: string;
  headers: {
    headers: {
      'X-API-KEY': string;
    };
  };
  fetch: (path: string) => Promise<Response>;
  constructor() {
    this.baseUrl = 'https://for.microcms.io/api/v1/';
    this.headers = { headers: { 'X-API-KEY': process.env.API_KEY } };
    this.fetch = (path: string) => fetch(this.baseUrl + path, this.headers);
  }
  async article(id: string): Promise<ResponseTypes.ArticleResponseType> {
    console.log(`ApiRequests.article`);
    return await this.fetch(`articles/${id}`).then((response) =>
      response.json()
    );
  }
  async articles(): Promise<ResponseTypes.ArticlesResponseType> {
    console.log(`ApiRequests.articles`);
    const response = await this.fetch('articles');
    return response.json();
  }
  async categories(): Promise<ResponseTypes.CategoriesResponseType> {
    console.log(`ApiRequests.categories`);
    const response = await this.fetch('categories');
    return response.json();
  }
}

const ApiRequestsInstance = new ApiRequests();
export default ApiRequestsInstance;
