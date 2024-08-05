import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  wish:string='...';
  abc(interval:string){
    this.wish=interval
  }
}
