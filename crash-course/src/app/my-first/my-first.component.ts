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
  onSubmit() {
    this.isSubmitted=true;
    console.log(this.myname)
  }
  
}
