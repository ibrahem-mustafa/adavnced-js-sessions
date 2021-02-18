import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesService } from 'src/app/services/articles.service';


@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css'],
})
export class DefaultBarComponent implements OnInit {

  @Output() articleCreated = new EventEmitter();

  articleTitle: string = '';
  articleContent: string = '';

  constructor(
    private modalService: NgbModal,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {}

  createArticle() {
    this.articlesService.createArticle( this.articleTitle, this.articleContent ).subscribe(
      (result: any) => {
        this.articleCreated.emit(result.article);
        this.articleTitle = '';
        this.articleContent = '';
      },
      error => console.log(error)
    )
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
