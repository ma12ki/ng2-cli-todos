/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ITodos } from '../../services/index';
import { TodoListComponent } from './todo-list.component';

class MockTodosService implements ITodos {
  todos;

  addTodo() { }
}

describe('Component: TodoList', () => {
  it('should create an instance', () => {
    let component = new TodoListComponent(new MockTodosService());
    expect(component).toBeTruthy();
  });
});
