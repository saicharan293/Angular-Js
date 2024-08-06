// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

interface Person{
  email:string,
  password:string,
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

  constructor(private api:ApiService,
    public r:Router
  ){}


  //acts as two way binding
  data:any=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  isSubmitted:boolean=false;

  get form(){
    return this.data.controls
  }
  
  msg:any;
  color:any;
  login(){
    const data=new FormData()
    this.isSubmitted=true;

    localStorage.setItem('email',this.data.value.email)
    console.log('mydata',this.data.value)
    


    //url performed here
    data.append('userEmail',this.data.value.email)
    data.append('userPassword',this.data.value.password)
    this.api.login(data).subscribe((res:any)=>{
      if(res.status==1){
        this.color='green'
        this.msg=res.message
        console.log('msg',this.msg)
        setTimeout(()=>{
          this.r.navigate(['dashboard'])
        },3000)
      }else{
        this.color='red'
        this.msg=res.message
        console.log('msg',this.msg)

        this.color='red'
      }
    })
  }
}
