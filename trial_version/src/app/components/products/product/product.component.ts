import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CourseLists } from '../../../courses/courseList';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  CourseList = new CourseLists()

  list=this.CourseList.courses
  
  constructor(public cservice:CartService,
    public actRoute:ActivatedRoute
  ){}
  addToCart(course:any){
    this.cservice.addProductToCart(course)
  }
  productId:any;
  findProduct:any;

  ngOnInit(): void {
    this.productId=this.actRoute.snapshot.paramMap.get('id')
    // console.log(this.productId)
    this.findProduct=this.list.find((item)=>{
      return item.id==this.productId
    })
    console.log(this.findProduct)
  }
  

} 
