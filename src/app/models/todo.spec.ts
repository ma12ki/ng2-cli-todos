/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    let attrs = {
      title: 'a',
      dueDate: new Date()
    }
    expect(new Todo(attrs)).toBeTruthy();
  });
});
