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


  //property binding
  isdisabled:boolean=true;
  ishidden:boolean=false;
  
  //style binding
  cvar:string='green'

  //style binding using object
  mystyle:object={
    color:'green',
    background:'yellow',
    border:'5px dashed red'
  }

  //class binding
  isactive:boolean=true;
  
  test(){
    return this.a;
  }
  timeid=setInterval(()=>{
    this.date=new Date().toLocaleTimeString();
  },1000);
}
