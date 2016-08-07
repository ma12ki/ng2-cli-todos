import { TodoPriority } from './priority.enum';
import { UUID } from 'angular2-uuid';

export interface ITodo {
  title: string;
  dueDate: Date;
  priority?: TodoPriority;
  completed?: boolean;
  description?: string;
}

export class Todo {
  id: string;
  title: string;
  dueDate: Date;
  priority: TodoPriority;
  completed: boolean;
  description: string;

  constructor( attrs: ITodo) {
    this.id = UUID.UUID();
    this.title = attrs.title;
    this.dueDate = attrs.dueDate;
    this.priority = attrs.priority || TodoPriority.Medium;
    this.completed = attrs.completed != null ? attrs.completed : false;
    this.description = attrs.description || '';
  }
}
