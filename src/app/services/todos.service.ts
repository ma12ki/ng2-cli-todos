import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { ITodos } from './todos.interface';
import { ILocalStorage } from './local-storage.interface';
import { LocalStorageService } from './local-storage.service';
import { Todo } from '../models/index';

const TODOS_KEY = 'todos';

// interface for a function operating on the `todos` stream
// should accept and return an array of messages
interface ITodosOperation extends Function {
  (todos: Todo[]): Todo[];
}

@Injectable()
export class TodosService implements ITodos {
  todos: Observable<Todo[]>;

  newTodos: Subject<Todo> = new Subject<Todo>();

  updates: Subject<any> = new Subject<any>();

  create: Subject<Todo> = new Subject<Todo>();

  update: Subject<Todo> = new Subject<Todo>();

  delete: Subject<Todo> = new Subject<Todo>();

  constructor(@Inject(LocalStorageService) private storage: ILocalStorage) {
    console.log('*** TodosService constructor ***');
    /*
    if (!this.storage.getItem(TODOS_KEY)) {
      let todos = [
        { title: 'Learn Angular 2', dueDate: new Date()},
        { title: 'Learn Observables', dueDate: new Date()}
      ];
      this.storage.setItem(TODOS_KEY, todos);
    }
    */
    let storedTodos: Todo[];
    try {
      storedTodos = this.storage.getItem(TODOS_KEY);
    } catch (err) {
      storedTodos = null;
    }

    let initialTodos = (storedTodos || [])
      .map((todo) => {
        // todo.dueDate = new Date(todo.dueDate);
        return new Todo(todo);
      });

    this.todos = this.updates
      .do(x => console.log('# todos/updates', x))
      // apply the given operation on `todos` and return them
      .scan((todos: Todo[], operation: ITodosOperation) => {
        console.log('# todos/updates scan', todos.length);
        return operation(todos);
      },
      initialTodos)
      .publishReplay(1)
      .refCount()
      .startWith(initialTodos);

    this.create
      .map( (todo: Todo): ITodosOperation => {
        console.log('# create map', todo);
        return (todos: Todo[]) => {
          console.log('# create $ invoked ITodosOperation', todos.length);
          todos = todos.concat(todo);
          this.storage.setItem(TODOS_KEY, todos);
          return todos;
        };
      })
      .do(x => console.log('# create after map', x))
      .subscribe(this.updates);

    this.newTodos
      .subscribe(this.create);

    this.update
      .map( (todo: Todo): ITodosOperation => {
        return (todos: Todo[]) => {
          todos = todos
            .map( (t: Todo) => {
              if (t.id === todo.id) {
                t = todo;
              }
              return t;
            });

          this.storage.setItem(TODOS_KEY, todos);
          return todos;
        };
      })
      .subscribe(this.updates);

    this.delete
      .map( (todo: Todo): ITodosOperation => {
        return (todos: Todo[]) => {
          todos = todos
            .filter( (t: Todo) => {
              return t.id !== todo.id;
            });

          this.storage.setItem(TODOS_KEY, todos);
          return todos;
        };
      })
      .subscribe(this.updates);
  }

  addTodo(todo: Todo): void {
    this.newTodos.next(todo);
  }

  editTodo(todo: Todo): void {
    this.update.next(todo);
  }

  deleteTodo(todo: Todo): void {
    this.delete.next(todo);
  }
}
