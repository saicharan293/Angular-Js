import { Component, Input } from '@angular/core';
import { CartService } from './cart/cart.service';


// boostrap 5

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'robot-shop-2';
  constructor(private cartService:CartService
  ){
    
  }
  // count=this.cartService.cartCount()
  getCount(){
    return this.cartService.cartCount()
  }
  

  
  
}
