import { Component } from '@angular/core';

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
  onSubmit() {
    this.isSubmitted=true;
    this.messages.push({
      'name':this.myname,
      'email':this.email,
      'message':this.message
    })
    // this.myname='';
    // this.email='';
    // this.message='';
    
  }
  deleteMessage(index: number) {
    this.messages.splice(index,1);
  }
  
}
