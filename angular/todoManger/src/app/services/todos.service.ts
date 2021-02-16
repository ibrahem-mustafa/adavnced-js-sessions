import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Todo {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}

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

  todosBaseUrl = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosBaseUrl + '/todos?_limit=10');
  }

  createTodo(todo: Todo) {
    return this.http.post(this.todosBaseUrl + '/todos', todo);
  }
}
