import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  color:string='red';
  course:any='';
  styling:any={'color':'red','border':'2px solid blue','background-color':'yellow'}

  
  red(){
    this.color='red'
  }
  green(){
    this.color='green'
  }
  blue(){
    this.color='blue'
  }
}
