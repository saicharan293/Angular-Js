import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-with-Harry';
  constructor(){
    setTimeout(() => {
      this.title="change title2 "
    }, 2000);
  }

}
