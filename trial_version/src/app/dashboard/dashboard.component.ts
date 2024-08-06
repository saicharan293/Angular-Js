import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  email:any;
  ngOnInit(): void {
    if(!localStorage.getItem('email')){
      this.r.navigate(['/login'])
    }
    this.email=localStorage.getItem('email')
    console.log('email',this.email)
  }
  constructor(private r:Router){}
  logout(){
    this.r.navigate(['/login'])
    localStorage.clear()
  }
}
