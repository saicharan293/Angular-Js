import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '2way_bind';
  email:string='';
  update(em:string){
    this.email=em;
  }
}
