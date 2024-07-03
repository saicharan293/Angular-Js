import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '2way_bind';
  mobiles:string[]=['redmi','realmi','samsung','oppo','vivo'];
}
