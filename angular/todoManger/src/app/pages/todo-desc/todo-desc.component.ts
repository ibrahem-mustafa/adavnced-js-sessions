import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-desc',
  templateUrl: './todo-desc.component.html',
  styleUrls: ['./todo-desc.component.css'],
})
export class TodoDescComponent implements OnInit {
  currentTodoId: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.currentTodoId = this.route.snapshot.paramMap.get('id')!;
  }

  navToRelated() {
    this.router.navigate(['related'], { relativeTo: this.route });
  };
  navToComments() {
    this.router.navigate(['comments'], { relativeTo: this.route });
  };
}
