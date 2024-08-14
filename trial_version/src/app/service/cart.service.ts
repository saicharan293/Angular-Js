import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import 'ngx-toastr/toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:any=[];

  cartProductsCount:any=this.cartProducts.length;

  constructor(private toastr: ToastrService) { }
  addProductToCart(course:any){
    this.cartProducts.push(course);
    this.showSuccess;

    // console.log(this.cartProducts)
  }
  get showSuccess() {
    return this.toastr.success('Product added succesfully 😍', this.cartProductsCount);
  }

  getAllCartProducts(){
    return this.cartProducts;
  }

  removeFromCart(id:number){
    // debugger
    let cartItem = this.cartProducts.find((ele : any) => ele.id == id)
    let cartItemIndex = this.cartProducts.indexOf(cartItem);
    this.cartProducts.splice(cartItemIndex,1);
    this.cartProductsCount=this.cartProducts.length;
    this.showDelete;
  }
  get showDelete() {
    return this.toastr.warning('😢 Product deleted...');
  }

  
}
