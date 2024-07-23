import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent {

  //Parent: my first component 
  //Child: message-details
  //P I/p C
  @Input()
  messageList:any={};
}
