import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product, products } from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit{

product: Product | undefined;

constructor(private route: ActivatedRoute,
  private cartService:CartService) { }

ngOnInit(){
  const routeParam=this.route.snapshot.paramMap;
  const productIdFromRoute=Number(routeParam.get('productId'))
  this.product=products.find(product=>product.id===productIdFromRoute)
}
addToCart(pr:Product){

  this.cartService.addToCart(pr);
  window.alert('Your product has been added to the cart!');
}

}
