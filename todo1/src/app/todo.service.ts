import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskid:any=2;

  todoList=[
    {
      id:1,'task':'Task 1'
    },
    {
      id:2,'task':'Task 2'
    },
  ]
  constructor() { }
  addTodo(task:any){
    this.todoList.push({id:this.taskid++,'task':task});
  }
}
