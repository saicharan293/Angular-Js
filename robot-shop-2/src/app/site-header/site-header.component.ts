import { Component, Input } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent {
  @Input() cartCount= 0 
  

}
