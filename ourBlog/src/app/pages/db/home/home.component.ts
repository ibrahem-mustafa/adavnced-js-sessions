import { ARTICLE_INTERFACE } from './../../../interfaces/article.interface';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: ARTICLE_INTERFACE[] = [];
  closeResult = '';


  constructor(
    private articlesService: ArticlesService,
    private userService: UserService,

  ) {}

  ngOnInit(): void {
    this.articlesService
      .getArticlesByPublisher(this.userService.user().id)
      .subscribe(
        (result: any) => {
          this.articles = result.articles;
          console.log(this.articles);
        },
        (error) => {
          console.log(error);
        }
      );
  }


}
