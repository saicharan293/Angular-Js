import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Input()
  index:number=-1;

  @Output()
  delete:EventEmitter<number> = new EventEmitter<number>();

  onDelete(){
    this.delete.emit(this.index);
  };
}
