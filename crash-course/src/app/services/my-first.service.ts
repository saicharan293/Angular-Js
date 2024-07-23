import { Injectable } from '@angular/core';

//to provide service at application starter, 
//include service in providers in app.module.ts
@Injectable()
export class MyFirstService {

  messages:Array<any>=[];

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
