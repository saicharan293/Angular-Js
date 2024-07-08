import {Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { // Implement AfterViewInit
  title = '2way_bind';

  @ViewChild('test')
  data!: ElementRef; // Added type annotation

  //To give first access to view child, ngAfterViewInit is used
  ngAfterViewInit(){
    console.log(this.data.nativeElement)
    this.data.nativeElement.onkeyup=()=>{
      console.log(this.data.nativeElement.value)
    }
  }
}