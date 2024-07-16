import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud_2';
  sidebaropen:boolean=true;
  toggleSideBar(){
    this.sidebaropen=this.sidebaropen?false:true;
  }
}
