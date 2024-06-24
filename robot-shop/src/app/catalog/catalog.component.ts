import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  product: IProduct;

  constructor(){
    this.product={
      id:2,
      description:"A friendly robot with two eyes with a smile -- great for domestic use",
      name: 'Friendly robot',
      imageName:'head-friendly.png',
      category:'Heads',
      price: 945.0,
      discount: 0.2
    };
  }
  getImageUrl(product:IProduct){
    return '/assets/images/robot-parts/'+product.imageName;
  }
  getImageName(product:IProduct){
    return product.name;
  }
}
