import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //from child to parent
  @Output() custEvent=new EventEmitter();
  messageToParent:string='passed to parent';

  passToParent(){
    this.custEvent.emit(this.messageToParent)
  }

  //update from child to parent
  updateMessage(e:any){
    this.messageToParent=e.target.value;
  }
  constructor(){}
}
