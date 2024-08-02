import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public year = 2000;

  ngOnInit(): void {
    console.log(this.getAge())
  }

  getAge(){
    let yr=new Date().getFullYear()
    return yr-this.year
  }
}
