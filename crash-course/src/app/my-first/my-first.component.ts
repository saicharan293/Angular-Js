import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.scss'
})
export class MyFirstComponent {


  myname:string='sai';
  email:string='sai@gmail.com';
  message:string='this is first message';
  isSubmitted:boolean=true;
  messages:Array<any>=[];

  constructor(private service:MyFirstService){
    this.messages=this.service.getAll();
    this.isSubmitted=this.messages.length > 0;
  }
  onSubmit() {
    this.isSubmitted=true;
    this.service.insert({
      'name':this.myname,
      'email':this.email,
      'message':this.message
    })
    // this.myname='';
    // this.email='';
    // this.message='';
    
  }
  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
  
}
