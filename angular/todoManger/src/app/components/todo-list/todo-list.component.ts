import { Component, Input,Output,  OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input('todoList') todos: any[] = [];

  @Output() sendMessage = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.sendMessage.emit('This Message Is From Todo List Child')
  }
}
