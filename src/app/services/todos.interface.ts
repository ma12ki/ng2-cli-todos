import { Observable } from 'rxjs/Observable';
import { Todo } from '../models';

export interface ITodos {
  todos: Observable<Todo[]>;

  addTodo: (todo: Todo) => void;

  editTodo: (todo: Todo) => void;

  deleteTodo: (todo: Todo) => void;
}
