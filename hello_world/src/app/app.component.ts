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
  counter:number=0;
  name:string='sai';
  increment(){
    this.counter+=1;
  }
  decrement(){
    this.counter-=1;
  }
  changeName(e:any){
    this.name=e.target.value;
  }
  city:string='Hyderabad';
}
