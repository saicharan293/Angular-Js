import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  num:number=0;

  increment(){
    this.num+=1;
  }
  decrement(){
    this.num-=1;
  }
  reset(){
    this.num=0;
  }
}
