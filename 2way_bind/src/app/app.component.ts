import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { // Implement AfterViewInit
  title = '2way_bind';

  @ViewChild(HeaderComponent)
  header: HeaderComponent = new HeaderComponent; // Added type annotation

  childdata='';
  test() {
    // console.log(this.header.passToParent());
    this.childdata=this.header.passToParent();
  }
}