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

  onSubmit(){
    console.log(this.name);
  }
}
