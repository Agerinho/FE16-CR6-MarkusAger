import { Injectable } from '@angular/core';
import { PizzaArray } from './pizzaArray';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<PizzaArray> = [];
  constructor() { }

  addToCart(pizza: PizzaArray) {
    this.cart.push(pizza);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}