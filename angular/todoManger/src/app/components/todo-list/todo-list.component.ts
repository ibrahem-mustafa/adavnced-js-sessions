import { Component, Input,Output,  OnInit, EventEmitter } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  private todosService!: TodosService;

  @Output() sendMessage = new EventEmitter();

  constructor(_todosService: TodosService) {
    this.todosService = _todosService;
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
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
