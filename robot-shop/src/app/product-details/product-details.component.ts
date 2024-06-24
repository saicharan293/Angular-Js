import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: IProduct;

  getImageUrl(product:IProduct){
    return '/assets/images/robot-parts/'+product.imageName;
  }
  getImageName(product:IProduct){
    return product.name;
  }
  getDiscountedClass(product:IProduct){
    // if (product.discount>0) return 'strikethrough';
    // else return '';
    return (product.discount>0)?['strikethrough']:[];
  }

  addToCart(product:IProduct){}
}
