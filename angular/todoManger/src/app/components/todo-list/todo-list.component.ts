import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService, Todo } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  private todosService!: TodosService;

  @Output() sendMessage = new EventEmitter();

  constructor(_todosService: TodosService, private router: Router) {
    this.todosService = _todosService;
  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(
      (todos) => (this.todos = todos),
      (error: HttpErrorResponse) => {
        console.error(error);
      }
    );
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  navToTodo(todo: Todo) {
    // /todo/todoId
    this.router.navigate(['/todos', todo.id])
  }
  //////////////////////////////////////////////////

  // todos: any[] = [];
  // constructor(private todosService: TodosService) {}

  //////////////////////////////////////////////////

  // @Input('todoList') todos: any[] = [];

  // @Output() sendMessage = new EventEmitter();

  //////////////////////////////////////////////////

  onClick() {
    this.sendMessage.emit('This Message Is From Todo List Child');
  }
}
