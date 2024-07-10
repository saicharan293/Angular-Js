import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Implement AfterViewInit
  title = '2way_bind';
  constructor(private http: HttpClient) {}
  myobs = new Observable((listener) => {
    listener.next(1);
    listener.next(2);
    setTimeout(() => {listener.next(3);}, 1000);
    setTimeout(() => {listener.next(4);}, 1000);
    setTimeout(() => {listener.next(6);}, 1000);
    setTimeout(() => {listener.complete();}, 1000);
  });
  subs(){
    this.myobs.subscribe(
      data=>console.log(data),
      err=>console.log('error',err),
      ()=>console.log("completed")
    )
  }
}
