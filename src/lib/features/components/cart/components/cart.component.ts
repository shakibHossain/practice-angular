import { Component } from '@angular/core';
import { CartService } from 'src/lib/features/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  getCartItems() {
    return this.cartService.getAllProducts();
  }
}
