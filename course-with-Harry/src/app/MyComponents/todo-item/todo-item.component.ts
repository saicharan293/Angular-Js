import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todo: Todo=new Todo;

  @Output()
  todoDelete: EventEmitter<Todo>=new EventEmitter();
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("on click is triggered")
  }
}
