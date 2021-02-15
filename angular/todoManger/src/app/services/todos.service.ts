import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = [
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' },
    { id: 4, title: 'Todo 4' },
    { id: 5, title: 'Todo 5' },
  ];

  constructor() {}

  getTodos(): any[] {
    return this.todos.slice(0, 2);
  }
}
