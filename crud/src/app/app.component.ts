import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'crud';

  mobiles:any=[
    {
      name:'xyz',
      price:20000,
      ram:6,
      storage:64
    },
    {
      name:'abc',
      price:22000,
      ram:4,
      storage:32
    },
  ];
  ngOnInit(): void {
    
  }
 

}
