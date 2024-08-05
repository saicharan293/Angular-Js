import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
    name:'Table',
    url:'/table',
    sub:[]
    },
    {
    name:'Blob',
    url:'/blob',
    sub:[]
    },
     
  ]
}
