import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { url } from 'inspector';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit,OnChanges{
  //for observing items count in cart, header need to send the change to cart
  //to use ngOnChanges, Input directive need to be used
  @Input() CartItemsCount= 0 
  public navs=[
    {
    name:'Home',
    url:'/',
    sub:[]
    },
    {
    name:'About',
    url:'/about-us',
    sub:[]
    },
    {
    name:'Courses',
    url:'/courses',
    sub:[
      {
        name:'Angular',
        url:'/courses/angular'
      },
      {
        name:'Node js',
        url:'/courses/nodejs'
      },
      {
        name:'Mongo Db',
        url:'/courses/mongodb'
      },
    ]
    },
    {
    name:'Contact',
    url:'/contact',
    sub:[]
    },
    {
    name:'Register',
    url:'/register',
    sub:[]
    },
    {
    name:'Login',
    url:'/login',
    sub:[]
    },
    {
    name:'Parent',
    url:'/parent',
    sub:[]
    },
    {
      name:'Products',
      url:'/products',
      sub:[]
    },
     
  ]

  constructor(public cSevice:CartService){}
  cartCount:number=this.cSevice.cartProductsCount
  ngOnInit(): void {
    this.cartCount=this.cSevice.getAllCartProducts().length;
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['CartItemsCount']){
      this.cartCount=this.cSevice.getAllCartProducts().length;
    }
  }
 

}
