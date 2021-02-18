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

  getArticlesByPublisher(id: string) {
    return this.http.get<{
      articles: ARTICLE_INTERFACE[];
    }>(`${this.articlesUrl}/publisher/${id}`, { headers: this.getHeaders() });
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
}
