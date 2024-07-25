import { Component } from '@angular/core';

@Component({
  selector: 'cc-my-first',
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.scss'
})
export class MyFirstComponent {
  
  name:string='';
  email:string='';
  message:string='';

  isSubmitted:boolean=false;

  details:Array<any>=[];

  onSubmit(){
    this.isSubmitted=true;
    this.details.push({
      'name':this.name,
      'email':this.email,
      'message':this.message
    })
    console.log(this.details)
  }
}
