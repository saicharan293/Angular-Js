import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from '../catalog/product.model';
import { ToastrService } from 'ngx-toastr';
import 'ngx-toastr/toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<Iproduct[]> = new BehaviorSubject<Iproduct[]>([]);
  // private cart:ILineItem[]=[];

  constructor(private http:HttpClient,
    private toastr: ToastrService
  ) {
    // debugger
    this.http.get<Iproduct[]>('/api/cart').subscribe({
      next: (cart)=>this.cart.next(cart),
    })
  }


  newCart:Iproduct[]=[]

  cartCount(){
    // console.log('cart size',this.newCart.length)
    return this.newCart.length
  }


  add(product: Iproduct) {
    // console.log('add cart service started')
    
    const currentCart=this.cart.getValue();
    this.newCart=[...currentCart,product]
    this.cartCount();
    this.cart.next(this.newCart);

    this.http.post('/api/cart',this.newCart).subscribe(()=>{
      console.log(`added. ${product.name} to cart`);
    })
    
    // console.log('add cart service ended')
    this.showSuccess()
  }
  showSuccess() {
    this.toastr.success('Item added successfully! 😍 '+this.cartCount());
  }

  showRemove() {
    this.toastr.warning('😢 Item removded from cart!  ' );
  }
  getCart():Observable<Iproduct[]>{
    return this.cart.asObservable();
  }

  remove(product: Iproduct){
    this.newCart=this.cart.getValue().filter(i=>i!==product);
    this.cart.next(this.newCart);
    this.http.post('/api/cart',this.newCart).subscribe(()=>{
      console.log('removed'+product.name+' from cart!')
    })
    this.cartCount()

    this.showRemove()
  }
}
