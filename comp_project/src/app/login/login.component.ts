import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  uname="";
  password="";
  errorMsg=""
  login(){
    if(this.uname.trim().length==0){
      this.errorMsg="Username is required"
    }else if(this.password.trim().length===0){
      this.errorMsg="password is required"
    } else{
      this.errorMsg='';
    }
  }
}
