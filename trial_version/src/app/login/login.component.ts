import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  // pd:Person={
  //   email:'',
  //   password:'',
  //   cpassword:''
  // }

  
  //acts as two way binding
  data:any=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  isSubmitted:boolean=false;

  get form(){
    return this.data.controls
  }

  login(){
    this.isSubmitted=true;
    console.log('mydata',this.data.value)
  }
}
