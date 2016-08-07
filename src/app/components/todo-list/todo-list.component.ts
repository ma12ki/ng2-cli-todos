import { Component, OnInit, Inject } from '@angular/core';
import { TodosService, ITodos } from '../../services/index';
import { Todo } from '../../models/index';
import { TodoItemComponent } from '../todo-item';

@Component({
  moduleId: module.id,
  selector: 'mz-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
  directives: [TodoItemComponent]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  loading: boolean = true;

  constructor(@Inject(TodosService) private todosService: ITodos) {
    console.log('*** TodoListComponent constructor ***');
  }

  ngOnInit(): void {
    console.log('*** TodoListComponent onInit ***');
    this.todosService.todos
      .subscribe((todos: Todo[]) => {
        console.log('@ toDoListComponent sub:', todos.length);
        this.todos = todos;
        this.loading = false;
      },
      (error: any) => {
        this.loading = false;
        console.log(error);
        throw error;
      },
      () => {
        console.log('@ toDoListComponent complete');
      });
  }

  toggleCompleted(todo: Todo): void {
    console.log('clicked todo', todo);
  }

}
