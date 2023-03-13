import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Product } from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product []=[]
  constructor(
    private http: HttpClient
  ) {}

  addToCart(product:Product){
    this.items.push(product);
  }
  clearCart(){
    this.items=[];
    return this.items
  }

  getItems(): Product[]{
    return this.items
  }
  getShippingPrices(){
  return this.http.get<{type:string, price:number}[]>('./assets/shipping.json')
  }


}
