import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(public http:HttpClient,
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
    localStorage.setItem('email','sai@gmail.com')
    console.log('mydata',this.data.value)
    setTimeout(() => {
      this.r.navigate(['/dashboard'])
    }, 2000);



    // data.append('email',this.data.value.email)
    // data.append('password',this.data.value.password)
    // this.http.post('url',data).subscribe((res:any)=>{
    //   if(res.status==1){
    //     this.color='green'
    //     this.msg=res.message
    //     setTimeout(()=>{
    //       this.r.navigate(['dashboard'])
    //     },3000)
    //   }else{
    //     this.color='red'
    //   }
    // })
  }
}
