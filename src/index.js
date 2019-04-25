import './scss/main.scss';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

import * as searchView from './views/searchView';
import { elements } from './views/base';
import Search from './models/Search';

const state = {};

const controlSearch = async () => {
  const query = searchView.getInputs();
  const [keyword, category] = query;
  if (query.length) {
    state.search = new Search(keyword, category);
    searchView.clearArticles();
    try {
      await state.search.getResults();
      console.log(state.search.result);
      searchView.renderArticles(state.search.result);
    } catch (error) {
      alert(error);
    }
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
