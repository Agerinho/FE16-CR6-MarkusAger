import { Component, OnInit } from '@angular/core';
import { pizzas } from '../pizzas';
import { PizzaArray } from '../pizzaArray';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  pizzas: Array<PizzaArray> = pizzas;
  pizza: PizzaArray = {} as PizzaArray;
  constructor(private CS: CartService) { }

  addToCart(id: number) {
    alert("added to cart");
    this.pizza = pizzas[id];
    this.CS.addToCart(this.pizza);
  }

  ngOnInit(): void {
    
  }

}
