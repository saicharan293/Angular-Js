import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  // parent_name:string='AVS'
  // msg:any;

  // res(val:any){
  //   this.msg=val
  // }
  act:boolean=true;
  name:any='parent component'

  xyz(data:any){
    this.name=data
  }
  hideChild(){
    this.act=false
  }
}
