import { Component, Input } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'cc-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  //products => parent
  //product-details => child
  @Input()
  product:ProductRepresentation={};
}
