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
    url:'/'
    },
    {
    name:'About',
    url:'/about-us'
    },
    {
    name:'Courses',
    url:'/courses'
    },
    {
    name:'Contact',
    url:'/contact'
    },
    {
    name:'Register',
    url:'/register'
    },
    {
    name:'Login',
    url:'/login'
    },
    {
    name:'Table',
    url:'/table'
    },
    {
    name:'Blob',
    url:'/blob'
    },
     
  ]
}
