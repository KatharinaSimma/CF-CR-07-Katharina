import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CartService } from '../cart.service';
import { travellist } from '../travelData';


@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.sass']
})
export class TravelDetailsComponent implements OnInit {

  travelItem; //refers to a single item in the travel-details-component

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(travelItem) {
    //window.alert('Your journey has been added to the cart!');
    this.cartService.addToCart(travelItem);
  }
 

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.travelItem = travellist[+params.get('travelId')];
      console.log(this.travelItem)
    });
  }

}

