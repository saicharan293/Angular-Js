import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages:Array<any>=[];
  
  //this is called constructor injection, since we are using constructor to 
  //initialise the service and use it
  constructor() { 
    this.init();
  }

  init():void{
    this.insert({
      name:'sai',
      email:'sai@gmial.com',
      message:'this is sai'
    });
    this.insert({
      name:'shiva',
      email:'shiva@gmial.com',
      message:'this is shiva'
    });
    this.insert({
      name:'charan',
      email:'charan@gmial.com',
      message:'this is charan'
    });
  }

  insert(message:{name:string,email:string,message:string}):void{
    this.messages.push(message)
  }
  getAll(){
    return this.messages;
  }
  deleteMessage(index:number):void{
    this.messages.splice(index,1)
  }
}
