import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
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
    // {
    // name:'Lazy',
    // url:'/lazy',
    // sub:[]
    // },
     
  ]

  constructor(public cSevice:CartService){}
  cartCount:number=0
  ngOnInit(): void {
    // console.log(this.cSevice.getCartProducts())
    this.cartCount=this.cSevice.getAllCartProducts().length
  }

}
