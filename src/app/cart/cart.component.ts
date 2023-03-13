import { Component } from '@angular/core';
import {CartService} from '../cart.service';
import {Product} from '../products';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items:Product []=this.cartService.getItems();
  checkoutForm=this.formBuilder.group({
    name:'',
    address:''
  })
  constructor(private cartService:CartService, private formBuilder:FormBuilder){}

  onSubmit(){
    console.warn('Your order has been submitted', this.checkoutForm.value)
    this.items=this.cartService.clearCart();
    this.checkoutForm.reset();
  }



}
