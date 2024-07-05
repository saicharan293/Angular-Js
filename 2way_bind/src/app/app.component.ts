import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '2way_bind';
  // person={
  //   'name':'sai',
  //   'gender':'m',
  //   'course':'angular'
  // }
  person={
    'name':'sati',
    'gender':'f',
    'course':'python'
  }
  wish:string='welcome'

}
