import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
// import { HttpClient } from '@angular/common/http';


interface Student{
  fname:string,
  lname:string,
  email:string,
  password:string,
  phone:string,
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private api:ApiService){

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
    phone:''
  }
  reg(){
    const data=new FormData()
    data.append("fname",this.student.fname)
    data.append("lname",this.student.lname)
    data.append("email",this.student.email)
    data.append("pwd",this.student.password)
    data.append("ph",this.student.phone)
    console.log(this.student)
    //url need to be taken from api link
    this.api.register(data).subscribe((res:any)=>{
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
