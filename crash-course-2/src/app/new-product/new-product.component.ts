import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cc-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {
  products:ProductRepresentation={};
  constructor(
    private service:ProductService,
    private router:Router
  ){}
  saveProduct(){
    this.service.createProduct(this.products)
    .subscribe({
      next:(result)=>{
        this.router.navigate(['products'])
      }
    })
  }
}
