import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { pizzas } from '../pizzas';
import { PizzaArray } from '../pizzaArray';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pizza: PizzaArray = {} as PizzaArray;
  id: number = 0;
  constructor(private route: ActivatedRoute, private CS: CartService) {
    // this.CS = new CartService;
  }

  addToCart() {
    alert("added to cart");
    this.CS.addToCart(this.pizza);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]; // + == Number()
      this.pizza = pizzas[this.id];
    })
  }

}
