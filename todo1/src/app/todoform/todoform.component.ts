import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {
  
  todoInput: any='';
  constructor(private ts:TodoService){}
  addTask(){
    this.ts.addTodo(this.todoInput);
    this.todoInput='';
  }
  resetForm(){
    this.todoInput='';
  }
} 
