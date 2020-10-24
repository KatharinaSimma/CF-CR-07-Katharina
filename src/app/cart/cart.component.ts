import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  items;
  price;
  newSum;

  constructor(private cartService: CartService) { }

  


  ngOnInit(){
    this.items = this.cartService.getItems();
    this.price = this.cartService.displayCartSum();
    this.newSum = this.cartService.displayNewCartSum();

  }


}
