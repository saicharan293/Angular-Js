import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '2way_bind';
  // mobiles:string[]=['redmi','realmi','samsung','oppo','vivo'];
  num1:number=4;
  num2:number=2;
  operator:string='+';
}
