import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'hello_world';
  new_class:string='high';
  // date:string=new Date().toLocaleDateString();
  date:string=new Date().toLocaleTimeString();
  a=1;
  city:string='hyderabad';
  test(){
    return this.a;
  }
  timeid=setInterval(()=>{
    this.date=new Date().toLocaleTimeString();
  },1000);
}
