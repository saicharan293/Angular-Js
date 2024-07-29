import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo:any;

  @Output() delete: EventEmitter<Todo>= new EventEmitter();

  onDelete(todo:Todo){
    this.delete.emit(todo);
    console.log("on delete has been triggered")
  }
}
