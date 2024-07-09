import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private r:Router){

  }   
  navigate() {
    this.r.navigate(['/home',4,'js'],{
      queryParams:{'page':7,'size':20}
    })
  }
  
  
  
}
