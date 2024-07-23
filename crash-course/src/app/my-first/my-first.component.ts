import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.scss'
})
export class MyFirstComponent {

  myname:string='';
  email:string='';
  message:string='';
  isSubmitted:boolean=true;
  messages:Array<any>=[];
  onSubmit() {
    this.isSubmitted=true;
    this.messages.push({
      'name':this.myname,
      'email':this.email,
      'message':this.message
    })
    this.myname='';
    this.email='';
    this.message='';
  }
  
}
