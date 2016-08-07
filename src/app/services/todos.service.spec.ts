/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TodosService } from './todos.service';
import { ILocalStorage } from './local-storage.interface';
import { Todo } from '../models/index';

class MockLocalStorage implements ILocalStorage {
  getItem(key: string): string {
    return '';
  }

  setItem(key: string, value: string): void {
  }
}

/*
describe('Service: Todos', () => {
  beforeEach(() => {
    addProviders([TodosService]);
  });

  it('should ...',
    inject([TodosService],
      (service: TodosService) => {
        expect(service).toBeTruthy();
      }));
});
*/

describe('Service: Todos', () => {
   it('should test', () => {

     let service = new TodosService(new MockLocalStorage());

     let todo1 = new Todo({
       title: 'lol',
       dueDate: new Date()
     });
     let todo2 = new Todo({
       title: 'mao',
       dueDate: new Date()
     });
     // listen to each message indivdually as it comes in
     service.newTodos
       .subscribe( (todo: Todo) => {
         console.log('=> newTodos:', todo);
       });

     // listen to the stream of most current messages
     service.todos
       .subscribe( (todos: Todo[]) => {
         console.log('=> todos:', todos.length);
       });

     service.addTodo(todo1);
     service.addTodo(todo2);

     // => messages: 1
     // => newMessages: Hi!
     // => messages: 2
     // => newMessages: Bye!
   });


});
