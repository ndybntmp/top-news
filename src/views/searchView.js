import { elements } from './base';

export const getInputs = () => [
  elements.searchKeyword.value,
  elements.searchCategory.value
];

export const clearArticles = () => {
  elements.newsEl.innerHTML = '';
};

export const renderArticle = result => {
  const markup = `
           <article class="card mt-5">
               <img src="${
                 result.urlToImage
               }" class="d-none card-img-top" alt="...">
               <h6 class="card-header text-muted">${result.source.name}</h6>
               <div class="card-body">
                   <h5 class="card-title">${result.title}</h5>
                   <p class="card-text">${result.description}<p>
                   <a href="${
                     result.url
                   }" class="btn btn-outline-primary" target="_blank">Read More<a>
               </div>
               <div class="card-footer"><small class="text-muted">${
                 result.publishedAt
               }</small></div>
           <article>
       `;

  elements.newsEl.insertAdjacentHTML('afterbegin', markup);
};

export const renderArticles = result => {
  result.forEach(element => {
    renderArticle(element);
  });
};
