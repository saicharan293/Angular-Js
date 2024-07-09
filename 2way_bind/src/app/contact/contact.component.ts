import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public testService:TestService){}
  
  addMobile(){
    this.testService.mobiles.push('apple')
  }
}
