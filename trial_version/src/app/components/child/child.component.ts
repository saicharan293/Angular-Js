import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()
  child_ka_parent:string='';

  number:number=123;
  //to parent
  @Output() myevent:any=new EventEmitter();

  send(){
    this.myevent.emit(this.number)
  }
}
