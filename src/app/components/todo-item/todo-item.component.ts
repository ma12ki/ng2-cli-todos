import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/index';

@Component({
  moduleId: module.id,
  selector: '[mz-todo-item]',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  todoClicked: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() { }

  emitTodoClicked(event: Event): void {
    this.todoClicked.emit(this.todo);
    event.preventDefault();
    console.log(event);
  }

}
