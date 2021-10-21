import { apiKey } from "./constants";


class NewsApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._apiKey = apiKey;
  }
  
 getNewsCards(searchTerm) {
   const timeFrame = 60 * 60 * 24 * 7 * 1000;
        const date = new Date();
        const thisDate = date.toISOString();
        const pastDate = new Date(date.getTime() - timeFrame);
        const fromDate = pastDate.toISOString();


       return fetch(`${this._baseUrl}?q=${searchTerm}&from=${fromDate}&to=${thisDate}&sortBy=relevancy&apiKey=${this._apiKey}`)

      .then((res) =>{
        if (res.ok){
          return res.json();
        }
        return Promise.reject(new Error(res.status));
      })
      .then(res => res.articles);

    }
}



export const newsApi = new NewsApi({
    baseUrl: 'https://nomoreparties.co/news/v2/everything',
    headers: { 'Content-Type': 'application/json' },
    'Content-Type': 'application/json',
        'Accept': 'application/json'
});