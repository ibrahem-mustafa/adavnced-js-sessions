import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css'],
})
export class ArticleCardComponent implements OnInit {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() content: string = '';

  @Input() height: number = 150;
  constructor() {}

  ngOnInit(): void {}

  getStyle() {
    return {
      height: `${this.height}px`
    }
  }
}
