import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!: IProduct;
  @Output() buy=new EventEmitter;

  getImageUrl(product:IProduct){
    return '/assets/images/'+product.imageName;
  }
  getImageName(product:IProduct){
    return product.name;
  }
  getDiscountedClass(product:IProduct){
    // if (product.discount>0) return 'strikethrough';
    // else return '';
    return (product.discount>0)?['strikethrough']:[];
  }

  buyButton(product:IProduct){
    this.buy.emit();
  }
}
