import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(public http:HttpClient){

  }

  msg:any;
  // clr:any={red:false,green:false}
  clr:any;
  fname:string='sai';
  student:Student={
    fname:'',
    lname:'',
    email:'',
    password:'',
    cpassword:''
  }
  reg(){
    const data=new FormData()
    data.append("fname",this.student.fname)
    data.append("lname",this.student.lname)
    data.append("email",this.student.email)
    data.append("password",this.student.password)
    data.append("cpassword",this.student.cpassword)
    console.log(this.student)
    //url need to be taken from api link
    this.http.post('url',data).subscribe((res:any)=>{
      console.log(res)
      //{status: 1, message: 'Register successfully'}
      this.msg=res.message
      if(res.status===1){
        this.clr='green'
      }else{
        this.clr='red'
      }
    })
  }
}
