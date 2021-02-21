import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ARTICLE_INTERFACE } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articlesUrl = 'http://localhost:5000/articles';
  constructor(private http: HttpClient) {}

  getHeaders(): { authorization: string } {
    return {
      authorization: window.localStorage.getItem('token')!,
    };
  }

  getAllArticles() {
    return this.http.get<{
      articles: ARTICLE_INTERFACE[]
    }>(`${this.articlesUrl}`)
  }

  getArticlesByPublisher(id: string) {
    return this.http.get<{
      articles: ARTICLE_INTERFACE[];
    }>(`${this.articlesUrl}/publisher/${id}`, { headers: this.getHeaders() });
  }

  getArticleById(id: string) {
    return this.http.get(`${this.articlesUrl}/${id}`);
  }

  createArticle(title: string, content: string) {
    return this.http.post(
      `${this.articlesUrl}/insert`,
      {
        title,
        content,
      },
      { headers: this.getHeaders() }
    );
  }

  deleteArticle(id: string) {
    return this.http.delete(`${this.articlesUrl}/${id}`, {headers: this.getHeaders()})
  }
}
