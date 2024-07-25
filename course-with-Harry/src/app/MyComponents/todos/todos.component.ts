import { Component } from '@angular/core';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[]=[];
  constructor(){
    this.todos=[
      {
        sno:1,
        title:"this is title",
        description:"description",
        active:true
      },
      {
        sno:2,
        title:"this is title2",
        description:"description",
        active:true
      },
      {
        sno:3,
        title:"this is title3",
        description:"description",
        active:true
      },
    ]
  }
}
