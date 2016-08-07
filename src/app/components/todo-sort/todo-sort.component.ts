import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SortObject } from '../../models/index';

@Component({
  moduleId: module.id,
  selector: '[mz-todo-sort]',
  templateUrl: 'todo-sort.component.html',
  styleUrls: ['todo-sort.component.css']
})
export class TodoSortComponent implements OnInit {
  @Input()
  sortObject: SortObject;

  @Output()
  onSortChanged: EventEmitter<SortObject> = new EventEmitter<SortObject>();

  constructor() { }

  ngOnInit() {
    console.log(this.sortObject);
  }

  handleSortChange(predicate: string) {
    if (this.sortObject.predicate === predicate) {
      this.sortObject.reverse = !this.sortObject.reverse;
    } else {
      this.sortObject.predicate = predicate;
      this.sortObject.reverse = false;
    }

    this.onSortChanged.emit(this.sortObject);
  }

}
