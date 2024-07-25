import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'cc-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  products:ProductRepresentation[]=[];
  constructor(
    private service:ProductService
  ){

  }
  ngOnInit(): void {
    this.service.getAllProductsWithLimit()
    .subscribe({
      next:(result)=>{
        this.products=result;
      }
    })
    
  }
}
