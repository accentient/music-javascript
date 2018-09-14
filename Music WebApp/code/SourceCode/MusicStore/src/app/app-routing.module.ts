import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { NewComponent } from './new/new.component';
import { OffersComponent } from './offers/offers.component';
import { SelectionCdComponent } from './selection-cd/selection-cd.component';
import { SelectionMp3Component } from './selection-mp3/selection-mp3.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path:'payment-page',
    component: PaymentPageComponent
  },
  {
    path:'new',
    component: NewComponent
  },
  {
    path:'offers',
    component: OffersComponent
  },
  {
    path:'selection-cd',
    component: SelectionCdComponent
  },
  {
    path:'selection-mp3',
    component: SelectionMp3Component
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
