import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  //from child to parent
  childdata:string='pass this to parent component via view child';
  passToParent(){
    return this.childdata;
  }
}
