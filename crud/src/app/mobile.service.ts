import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private ms:HttpClient) { }
  fetchMobiles(){
    this.ms.get()
  }
  mobiles:any=[
    {
      name:'xyz',
      price:20000,
      ram:6,
      storage:64
    },
    {
      name:'abc',
      price:22000,
      ram:4,
      storage:32
    },
  ];
}
