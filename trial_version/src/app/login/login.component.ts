import { Component } from '@angular/core';

interface Person{
  email:string,
  password:string,
  cpassword:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // wish:string='...';
  // abc(interval:string){
  //   this.wish=interval
  // }

  // ty:string='password'
  // type1(type:string){
  //   this.ty=type
  // }

  pd:Person={
    email:'',
    password:'',
    cpassword:''
  }
}
