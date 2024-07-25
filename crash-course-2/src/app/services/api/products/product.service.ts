import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string='https://fakestoreapi.com/'
  constructor(
    private http:HttpClient
  ) { }

  getAllProductsWithLimit(limit:number=5){
    const productsurl=`${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsurl);
  }

  createProduct(product:ProductRepresentation){
    const productsurl=`${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsurl,product)

  }
}
