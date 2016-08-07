import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService, ITodos } from '../../services/index';
import { Todo, TodoPriority } from '../../models/index';
import { FromNowPipe } from '../../pipes/from-now.pipe';

@Component({
  moduleId: module.id,
  selector: '[mz-todo-item]',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css'],
  pipes: [FromNowPipe]
})
export class TodoItemComponent implements OnInit {
  priorities: any = TodoPriority;

  @Input()
  todo: Todo;

  constructor(@Inject(TodosService) private todosService: ITodos) { }

  ngOnInit() { }

  toggleCompleted() {
    this.todo.completed = !this.todo.completed;
    this.todosService.editTodo(this.todo);
  }

  confirmDelete() {
    if (window.confirm(`Are you sure you want to delete "${this.todo.title}"?`)) {
      this.delete();
    }
  }

  delete() {
    this.todosService.deleteTodo(this.todo);
  }

}
