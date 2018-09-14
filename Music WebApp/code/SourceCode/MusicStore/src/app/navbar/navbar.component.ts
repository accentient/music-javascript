import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import {MegaMenuModule} from 'primeng/megamenu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  //styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home', 
        icon: 'fa-check', 
        routerLink: ""
      },
      {
        label: 'New Music', 
        icon: 'fa-check', 
        routerLink: "new"
      },
      {
        label: 'Offers', 
        icon: 'fa-check', 
        routerLink: "offers"
      },
      {
        label: 'CDs', 
        icon: 'fa-check', 
        routerLink: "selection-cd"
      },
      {
        label: 'Downloads', 
        icon: 'fa-check', 
        routerLink: "selection-mp3"
      },
      {
        label: 'Shopping Cart', 
        icon: 'fa-check', 
        routerLink: "shopping-cart"
      },

    ]
  }

}
