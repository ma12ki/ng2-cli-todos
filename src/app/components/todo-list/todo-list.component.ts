import { Component, OnInit, Inject } from '@angular/core';
import { TodosService, ITodos } from '../../services/index';
import { Todo, SortObject } from '../../models/index';
import { TodoItemComponent } from '../todo-item';
import { TodoSortComponent } from '../todo-sort';
import { OrderByPipe } from '../../pipes/order-by.pipe';

@Component({
  moduleId: module.id,
  selector: 'mz-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
  directives: [TodoItemComponent, TodoSortComponent],
  pipes: [OrderByPipe]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  loading: boolean = true;

  sortObject: SortObject = new SortObject('title');

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

  changeSort(sortObject: SortObject): void {
    this.sortObject = sortObject;
  }
}
