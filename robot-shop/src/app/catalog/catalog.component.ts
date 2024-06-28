import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
// import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
    // this.filter=this.route.snapshot.params['filter']
    //this is the main area that queryparams work as per user requirement => for routing on click on each part in catalog
    this.route.queryParams.subscribe((params)=>{
      this.filter=params['filter']??'';
    })
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getFilteredComponents() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category === this.filter
        );
  }
}
