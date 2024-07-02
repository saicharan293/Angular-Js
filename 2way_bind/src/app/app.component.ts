import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2way_bind';
  city:string='kurnool';

  updateCity(){
    this.city=='kurnool'?(this.city='guntakal'):(this.city='kurnool');
  }
}
