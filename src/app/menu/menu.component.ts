import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { pizzas } from '../pizzas';
import { PizzaArray } from '../pizzaArray';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pizza: Array<PizzaArray> = pizzas;
  cart: PizzaArray = {} as PizzaArray;
  id: number = 0;
  constructor(private route: ActivatedRoute, private CS: CartService) {
    //this.CS = new CartService;
  }

  addToCart() {

  }

  ngOnInit(): void {
    
  }

}
