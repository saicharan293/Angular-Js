import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '2way_bind';
  // mobiles:string[]=['redmi','realmi','samsung','oppo','vivo'];
  mobiles = [
    {
      id: 1,
      name: 'Galaxy S23',
      price: 999,
      ram: '8GB',
      storage: '128GB',
    },
    {
      id: 2,
      name: 'iPhone 14',
      price: 1099,
      ram: '6GB',
      storage: '256GB',
    },
    {
      id: 3,
      name: 'Pixel 7',
      price: 899,
      ram: '8GB',
      storage: '128GB',
    },
    {
      id: 4,
      name: 'OnePlus 11',
      price: 849,
      ram: '12GB',
      storage: '256GB',
    },
    {
      id: 5,
      name: 'Xiaomi 13',
      price: 799,
      ram: '8GB',
      storage: '256GB',
    },
  ];
}
