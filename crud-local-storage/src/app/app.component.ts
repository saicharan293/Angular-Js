import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student Portal';
  studentObject:Student=new Student()

  @ViewChild('myModal') model:ElementRef | undefined;

  openModal(){
    // debugger
    const model=document.getElementById('myModal')
    if(model != null){
      model.style.display='block'
    }
  }

  closeModal(){
    if(this.model!=null){
      this.model.nativeElement.style.display='none'
    }
    
  }
}

export class Student{
  name:string;
  mobileNo:string;
  email:string;
  city:string;
  state:string;
  pincode:string;
  address:string;

  constructor(){
    this.address='';
    this.city='';
    this.email='';
    this.state='';
    this.name='';
    this.pincode='';
    this.mobileNo='';
  }
}
