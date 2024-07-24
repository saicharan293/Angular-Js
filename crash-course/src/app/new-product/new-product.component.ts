import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {
  product:ProductRepresentation={};
  constructor(private service:ProductService,private router:Router){}
  saveProduct(){
    this.service.createNewProduct(this.product)
    .subscribe({
      next:(result:ProductRepresentation)=>{
        this.router.navigate(['products'])
      }
    })
  }
}
