import { Injectable } from '@angular/core';
import { Product } from '../../components/products/types/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    console.log(product);
    this.cart.push(product);
  }

  getAllProducts() {
    return this.cart;
  }

  removeProduct(product: Product) {
    this.cart = this.cart.filter((item) => item != product);
  }
}
