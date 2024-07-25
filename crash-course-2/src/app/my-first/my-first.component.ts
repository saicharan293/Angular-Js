import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'cc-my-first',
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.scss'
})
export class MyFirstComponent {
  
  name:string='test';
  email:string='test@gmail.com';
  message:string='message from test';

  isSubmitted:boolean=false;

  details:Array<any>=[];
  
  //property injection for service
  private service:MyFirstService=inject(MyFirstService);

  //constructor injection for service
  constructor(){
    this.details=this.service.getAllDetails();
    this.isSubmitted=this.details.length>0;

  }

  onSubmit(){
    this.isSubmitted=true;
    this.service.insert({
      'name':this.name,
      'email':this.email,
      'message':this.message
    })
    console.log(this.details)
  }

  deleteMessage(index: number){
    this.service.deleteMessage(index)
  }
}
