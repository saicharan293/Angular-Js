import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class MyFirstService {

  details:Array<any>=[];

  constructor() { 
    this.init()
  }

  init():void{
    this.insert(
      {
        name:'sai',
        email:'sai@email.com',
        message:'hello'
      }
    );
    this.insert(
      {
        name:' charan',
        email:' charan@email.com',
        message:'hello charan'
      }
    );
    this.insert(
      {
        name:'siva',
        email:'siva@email.com',
        message:'hello siva'
      }
    );
  }

  insert(msg:{name:string,email:string,message:string}):void{
    this.details.push(msg);
  }

  getAllDetails(){
    return this.details;
  }

  deleteMessage(index:number){
    this.details.splice(index,1)
  }
}
