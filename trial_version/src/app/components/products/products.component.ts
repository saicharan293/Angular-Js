import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CourseLists } from '../../courses/courseList';

interface Courses{
  name:string,
  img:string,
  content:string,
  duration:number,
  fee:number,
  type:string
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(public cService:CartService){
  }

  courseList:CourseLists=new  CourseLists();
  cartNumber:any=0
 
  ngOnInit(): void {
    this.cartNumber=this.cService.getAllCartProducts().length
  }
  
  
  addToCart(course:any){
    this.cService.addProductToCart(course)
    this.cartNumber=this.cService.getAllCartProducts().length
  }
  
}
