import axios from 'axios';
import { api_key, api_base_url } from '../config';

export default class Search {
  constructor(keyword, category) {
    this.keyword = keyword;
    this.category = category;
  }

  async getResults() {
    try {
      const res = await axios(
        `${api_base_url}top-headlines?country=ph&category=${this.category}&q=${
          this.keyword
        }&pageSize=3&apiKey=${api_key}`
      );
      this.result = res.data.articles;
    } catch (error) {
      alert(error);
    }
  }
}
