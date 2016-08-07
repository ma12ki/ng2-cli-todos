import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list';
import { AddTodoComponent } from './components/add-todo';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodoListComponent, AddTodoComponent]
})
export class AppComponent { }
