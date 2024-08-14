import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productsCount :any =0;
  
  productsInCart:any = [];
  constructor(public cService:CartService){}


  ngOnInit()
  { 
   this.getAllCartProducts();
  }

  getAllCartProducts(){
    this.productsInCart=this.cService.getAllCartProducts()
    this.productsCount = this.productsInCart.length;
  }

  removeFromCart(id:any){
    // debugger
    if(confirm("Are you sure to Delete ? ")){
      this.cService.removeFromCart(id);
      this.productsCount = this.productsInCart.length;
    }
  }
  
  
}
