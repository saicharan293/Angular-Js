import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Implement AfterViewInit
  title = '2way_bind';
  constructor(private http: HttpClient) {}
  
}
