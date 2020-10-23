import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelComponent } from './travel/travel.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "blog", component: BlogComponent
  },
  {
    path: "travel", component: TravelComponent
  },
  {
    path: 'travel/:travelId', component: TravelDetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
