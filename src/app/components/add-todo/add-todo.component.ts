import { Component, OnInit, Inject } from '@angular/core';
import { TodosService, ITodos } from '../../services/index';
import { Todo, TodoPriority } from '../../models/index';

@Component({
  moduleId: module.id,
  selector: 'mz-add-todo',
  templateUrl: 'add-todo.component.html',
  styleUrls: ['add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
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

  resetTodo() {
    this.newTodo = new Todo({
      title: '',
      dueDate: null,
      priority: TodoPriority.Medium
    });
  }

  ngOnInit() { }

  addTodo(formValues, valid) {
    console.log(formValues, valid);
    return;
    // console.log('aassasa');
    /*
    let todo: Todo = new Todo({
      title: 'lmao',
      dueDate: new Date()
    });
    this.todosService.addTodo(todo);
    */
  }

}
