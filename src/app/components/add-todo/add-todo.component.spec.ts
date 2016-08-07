/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { AddTodoComponent } from './add-todo.component';
import { ITodos } from '../../services/index';

class MockTodosService implements ITodos {
  todos;

  addTodo() { }
}


describe('Component: AddTodo', () => {
  it('should create an instance', () => {
    let component = new AddTodoComponent(new MockTodosService());
    expect(component).toBeTruthy();
  });
});
