import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodosService, Todo } from 'src/app/services/todos.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {

  @Output() createTodo = new EventEmitter();

  todoTitle: string = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}


  addTodo() {
    const todo: Todo = {
      title: this.todoTitle,
      completed: false,
      userId: 1,
    };

    this.todosService.createTodo(todo).subscribe(
      (result) => this.createTodo.emit(result),
      (error) => console.log(error)
    );
  }
}
