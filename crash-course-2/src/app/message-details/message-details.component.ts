import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-message-details',
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent {

  @Input()
  detail:any={};
  

}
