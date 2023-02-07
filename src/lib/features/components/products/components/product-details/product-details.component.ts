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
    this.newProductEvent.emit(this.product);
  }
}
