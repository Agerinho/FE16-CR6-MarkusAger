import { Component, OnInit, HostListener } from '@angular/core';
import { CartService } from '../cart.service';
import { PizzaArray } from '../pizzaArray';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart: Array<PizzaArray> = [];
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private CS: CartService) { }
    
  onSubmit() {
    alert("Message sent!")
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
    console.table(this.cart);

    var products = document.getElementById("products")
    var service = document.getElementById("service")
    var discount = document.getElementById("discount")
    var total = document.getElementById("total")
    var totalSum = 0

    if (this.cart.length > 0) {
      var sum = this.cart.reduce((a, b) => +a + +b.price, 0)
      sum = Math.round(sum * 100) / 100
      totalSum = sum
      products.innerHTML = "€" + String(sum)

      var serviceSum = sum * 0.1
      serviceSum = Math.round(serviceSum * 100) / 100
      totalSum += serviceSum
      service.innerHTML = "€" + serviceSum

      var discountSum = totalSum * 0.15
      discountSum = Math.round(discountSum * 100) / 100
      if (totalSum >= 40) {
        discount.innerHTML = "-15%: €" + String(discountSum)
        totalSum -= discountSum
      } else {
        discount.innerHTML = "-"
      }

      totalSum = Math.round(totalSum * 100) / 100

      total.innerHTML = "€" + String(totalSum)
    } else {
      document.getElementById("cart").innerHTML = `<h2 class="h2 text-danger text-center p-5">The cart is empty!</h2>`
    }
  }
}
