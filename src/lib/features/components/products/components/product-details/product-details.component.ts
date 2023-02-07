import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/lib/features/components/products/types/Product';
import { CartService } from 'src/lib/features/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy, OnChanges {
  // Receiving data from parent
  @Input() product: Product = {} as Product;
  // Sending data to parent
  @Output() newProductEvent = new EventEmitter<Product>();

  @Input() testOnChangeValue: string = '';

  myInterval: any = null;

  isInCart: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.myInterval = setInterval(() => {
    //   console.log('hello');
    // }, 1000);
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change['testOnChangeValue']) {
      console.log(change['testOnChangeValue']);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
    console.log({ OnDestroy: 'OnDestroy' });
  }

  addToCart() {
    // console.log(this.product);
    this.isInCart = true;
    this.newProductEvent.emit(this.product);
    this.cartService.addProduct(this.product);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.removeProduct(this.product);
  }
}
