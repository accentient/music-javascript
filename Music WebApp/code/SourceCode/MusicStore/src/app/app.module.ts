import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { HeaderComponent } from './header/header.component';
import { SelectionCdComponent } from './selection-cd/selection-cd.component';
import { SelectionMp3Component } from './selection-mp3/selection-mp3.component';
import { NewComponent } from './new/new.component';
import { OffersComponent } from './offers/offers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MegaMenuModule } from 'primeng/megamenu';
import {CheckboxModule} from 'primeng/checkbox'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentPageComponent,
    ShoppingCartComponent,
    HeaderComponent,
    SelectionCdComponent,
    SelectionMp3Component,
    NewComponent,
    OffersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
