import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent {

  title:string='';
  description:string='';
  @Output()
  todoAdd: EventEmitter<Todo> =new EventEmitter();
  onSubmit(){
    const todo = {
      sno: 8,
      title:this.title,
      description:this.description,
      active:true
    }
    this.todoAdd.emit(todo)
  }
}
