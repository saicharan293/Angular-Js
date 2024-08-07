import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:any=[];

  constructor() { }
  addProductToCart(course:any){
    this.cartProducts.push(course)
  }
  
  getAllCartProducts(){
    console.log('length',this.cartProducts.length)
    return this.cartProducts
  }
}
