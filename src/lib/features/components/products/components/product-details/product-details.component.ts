import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/lib/features/components/products/types/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
})
export class ProductDetailsComponent {
  // Receiving data from parent
  @Input() product: Product = {} as Product;
  // Sending data to parent
  @Output() newProductEvent = new EventEmitter<Product>();

  addToCart() {
    // console.log(this.product);
    this.newProductEvent.emit(this.product);
  }
}
