import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product.model';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';


// import 'ngx-toastr/toastr';

// bootstrap style toast
// or import a bootstrap 4 alert styled design (SASS ONLY)
// should be after your bootstrap imports, it uses bs4 variables, mixins, functions
// import 'ngx-toastr/toastr-bs4-alert';

// import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit{
  products: any;
  filter: string = '';

  constructor(private cartService:CartService,
    private productService:ProductService,
    private router:Router,
  ) {
    
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products=>this.products=products,
    })
  }

  
  

  getFilteredProducts() {
    // console.log(this.filter)
    return this.filter === ''
      ? this.products
      : this.products.filter((product:any) => product.category === this.filter);
  }

  addToCart(product: Iproduct) {
    this.cartService.add(product);
    this.router.navigate(['cart'])
    // this.showSuccess()
    // console.log(this.addToCart)
  }
}
