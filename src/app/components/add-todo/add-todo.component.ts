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
  priorities: Object[] = new Array<Object>();

  constructor(@Inject(TodosService) private todosService: ITodos) {
    // console.log(TodoPriority);
    // console.log(TodoPriority.High);
    // console.log(TodoPriority[TodoPriority.Low]);
    // console.log(this.priorities);

    Object.keys(TodoPriority)
      .filter((k: any) => !isNaN(k))
      .map((k: any) => {
        this.priorities.push({
          key: k,
          value: TodoPriority[k]
        });
      });

    console.log(this.priorities);
  }

  ngOnInit() { }

  addTodo() {
    // console.log('aassasa');
    let todo: Todo = new Todo({
      title: 'lmao',
      dueDate: new Date()
    });
    this.todosService.addTodo(todo);
  }

}
