import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Student Portal';
  studentObject:Student=new Student();
  studentList:Student[]=[];

  @ViewChild('myModal') model:ElementRef | undefined;


  ngOnInit(): void {
    const localData=localStorage.getItem('angular17crud')
    if(localData != null){
      this.studentList=JSON.parse(localData)
    }
    console.log(this.studentList)
  }
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
  saveStudent(){
    // debugger;
    const isLocalPresent=localStorage.getItem('angular17crud')
    if(isLocalPresent!=null){
      const oldArray=JSON.parse(isLocalPresent)
      this.studentObject.id=oldArray.length+1
      oldArray.push(this.studentObject)
      this.studentList=oldArray;
      localStorage.setItem('angular17crud',JSON.stringify(oldArray))
    }else{
      const newStudentArray=[]
      newStudentArray.push(this.studentObject)
      this.studentObject.id=1;
      this.studentList=newStudentArray;
      localStorage.setItem('angular17crud',JSON.stringify(newStudentArray))
    }
    this.studentObject=new Student();
    this.closeModal();
  }
  onEdit(item:Student){
    this.studentObject=item;
    this.openModal();
    // this.saveStudent();
  }
  updateStudent(){
    const currentRecord=this.studentList.find(m=>m.id==this.studentObject.id)
    if(currentRecord!=undefined){
      currentRecord.name=this.studentObject.name;
      currentRecord.address=this.studentObject.address;
      currentRecord.mobileNo=this.studentObject.mobileNo;
    };
    localStorage.setItem('angular17crud',JSON.stringify(this.studentList));
    this.closeModal();
  }
  onDelete(item:Student){
    const isDelete=confirm("Are you sure to delete");
    if(isDelete){
      const currentRecord=this.studentList.findIndex(m=>m.id===this.studentObject.id)
      this.studentList.splice(currentRecord, 1)
      localStorage.setItem('angular17crud',JSON.stringify(this.studentList));
    }
  }
}

export class Student{
  id:number;
  name:string;
  mobileNo:string;
  email:string;
  city:string;
  state:string;
  pincode:string;
  address:string;

  constructor(){
    this.id=0;
    this.address='';
    this.city='';
    this.email='';
    this.state='';
    this.name='';
    this.pincode='';
    this.mobileNo='';
  }
}
