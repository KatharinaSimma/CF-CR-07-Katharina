import { Component, OnInit } from '@angular/core';
import { travellist } from '../travelData';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass']
})
export class TravelComponent implements OnInit {

  travels = travellist;

  constructor() { }

  ngOnInit(): void {
  }

}
