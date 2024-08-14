import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../catalog/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  private cart: Iproduct[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });
  }

  get cartItems() {
    // console.log('cart items',this.cart)
    return this.cart;
  }

  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
  }

  
  removeFromCart(product: Iproduct) {
    this.cartService.remove(product);
  }
}
