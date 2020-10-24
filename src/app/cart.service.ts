import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CartService {

    items = [];
    price = [];

    constructor() { }
   
    addToCart(item) {
      this.items.push(item);
      this.price.push(item.price);
      console.log(this.price)
     
    }

    displayCartSum(){
      let sum = this.price.reduce((a, b) => a + b, 0)
      console.log(sum)
      return sum
    }

    displayNewCartSum(){
      if (this.displayCartSum() >= 20000){
        var newSum = this.displayCartSum()*0.8
        console.log(newSum)
      }
      return newSum
    }
   
    getItems() {
      return this.items;
    }
   
    clearCart() {
      this.items = [];
      return this.items;
    }

    

}
