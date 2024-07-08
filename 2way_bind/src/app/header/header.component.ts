import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //from child to parent
  data='This is for the reference variable'
  ref_demo(){
    return 'reference function'
  }
  title='reference variable- demo'
  constructor(){}
  changeName(e:any){
    this.data=e.target.value
  }
}
