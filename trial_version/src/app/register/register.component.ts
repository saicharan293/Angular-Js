import { Component } from '@angular/core';

interface Student{
  fname:string,
  lname:string,
  email:string,
  password:string,
  cpassword:string,
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fname:string='sai';
  student:Student={
    fname:'',
    lname:'',
    email:'',
    password:'',
    cpassword:''
  }
  reg(){
    console.log(this.student)
  }
}
