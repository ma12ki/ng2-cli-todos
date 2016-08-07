import { Component, Inject } from '@angular/core';
import { TodosService, ITodos } from '../../services/index';
import { Todo, TodoPriority } from '../../models/index';

@Component({
  moduleId: module.id,
  selector: 'mz-add-todo',
  templateUrl: 'add-todo.component.html',
  styleUrls: ['add-todo.component.css']
})
export class AddTodoComponent {
  newTodo: Todo;
  priorities: Object[] = new Array<Object>();

  constructor(@Inject(TodosService) private todosService: ITodos) {
    this.resetTodo();

    Object.keys(TodoPriority)
      .filter((k: any) => !isNaN(k))
      .map((k: any) => {
        this.priorities.push({
          key: k,
          value: TodoPriority[k]
        });
      });
  }

  resetTodo(): void {
    this.newTodo = new Todo({
      title: '',
      dueDate: null,
      priority: TodoPriority.Medium
    });
  }

  addTodo(formValues: any, form): void {
    console.log(form);
    let todo: Todo = new Todo({
      title: formValues.title,
      dueDate: formValues.dueDate,
      priority: formValues.priority
    });
    this.todosService.addTodo(todo);
    this.resetTodo();
  }

}
