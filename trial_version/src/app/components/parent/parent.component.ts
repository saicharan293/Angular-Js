import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parent_name:string='AVS'
  msg:any;

  res(val:any){
    this.msg=val
  }
}
