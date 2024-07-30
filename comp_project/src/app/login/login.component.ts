import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  uname="";
  password="";
  errorMsg=""

  constructor(private auth:AuthService,
    private router: Router
  ){

  }
  login(){
    if(this.uname.trim().length==0){
      this.errorMsg="Username is required"
    }else if(this.password.trim().length===0){
      this.errorMsg="password is required"
    } else{
      this.errorMsg='';
      let res=this.auth.login(this.uname,this.password)
      if(res===200){
        this.router.navigate(['home']);
      }
      if(res===403){
        this.errorMsg="Invalid credentials"
      }
    }
  }
}
