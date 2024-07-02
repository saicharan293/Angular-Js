import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2way_bind';
  city:string='kurnool';
  show_city:boolean=false;
  buttonText: string = 'show';

  displayCity(){
    this.show_city==false?(this.show_city=true):(this.show_city=false);
    this.buttonText=this.show_city?'hide':'show'
  }
  updateCity(){
    this.city=='kurnool'?(this.city='guntakal'):(this.city='kurnool');
  }
}
