import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cc-message-details',
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.scss'
})
export class MessageDetailsComponent {



  @Input()
  detail:any={};

  @Input()
  index:number=-1;

  @Output()
  delete: EventEmitter<number>=new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.index)
  }

}
