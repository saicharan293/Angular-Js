import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cc-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private router:Router){}
  navigateToAbout() {
    this.router.navigate(['about'])
  }

}
