import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title:String='';
  description:String=''
  @Output() add: EventEmitter<Todo>=new EventEmitter()
  onSubmit(){
    const todo:any={
      sno:4,
      title:this.title,
      description:this.description
    }
    this.add.emit(todo)
  }
}
