import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:any=[];

  cartProductsCount:any=this.cartProducts.length;

  constructor() { }
  addProductToCart(course:any){
    this.cartProducts.push(course)
    // console.log(this.cartProducts)
  }

  getAllCartProducts(){
    return this.cartProducts;
  }

  removeFromCart(id:number){
    // debugger
    let cartItem = this.cartProducts.find((ele : any) => ele.id == id)
    let cartItemIndex = this.cartProducts.indexOf(cartItem);
    this.cartProducts.splice(id,1);
    this.cartProductsCount=this.cartProducts.length;
  }
}
