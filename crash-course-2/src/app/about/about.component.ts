import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'cc-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  constructor(
    private activatedRoute:ActivatedRoute,
    private service:ProductService
  ){

  }
  param:any;
  lname:any;
  course:any;
  ngOnInit(): void {
    // console.log(this.activatedRoute);
    this.param=this.activatedRoute.snapshot.params['username'];
    this.lname=this.activatedRoute.snapshot.queryParams['lname'];
    this.course=this.activatedRoute.snapshot.queryParams['course'];
    const product:ProductRepresentation={
      title:'My Product',
      description:'my description',
      price:12,
      category:'any category',
      image:'https://someimage.jpg'
    }
    this.service.createProduct(product)
    .subscribe({
      next:(result)=>{
        console.log(result)
      }
    })
    
  }
}
