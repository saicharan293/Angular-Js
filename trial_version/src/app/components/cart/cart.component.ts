import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cService:CartService){}

  productsInCart:any=[]

  productsCount:any=this.cService.getAllCartProducts().length;
  getProductsToCart(){
    this.productsInCart=this.cService.getAllCartProducts()
    this.productsCount=this.productsInCart.length
    console.log('products count',this.productsCount)
  }
}
