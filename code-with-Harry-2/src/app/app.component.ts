import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'code-with-Harry-2';
  constructor(){
    setTimeout(() => {
      this.title='Change this title'
    }, 2000);
  }
}
