import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/lib/features/components/products/types/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  isDisabled: boolean = false;

  fontSize: number = 16;

  applyClass: boolean = true;

  myColor: string = 'blue';

  attributeLabel: string = 'Set an attribute';

  isShowing: boolean = true;

  searchTerm: string = '';

  testOnChangeValue: string = '';

  constructor(private productsService: ProductsService) {
    // console.log({ constructor: 'constructor' });
  }

  ngOnInit(): void {
    // console.log({ onInIt: 'OnInit' });
    this.productList = this.productsService.getProducts();
  }

  handleClick() {
    alert('Here');
  }

  // handleToggle() {
  //   this.isShowing = !this.isShowing;
  // }

  // handleInput(event: any) {
  //   console.log(event.target.value);
  // }

  // Receiving data from child
  addToCart(product: Product) {
    console.log(product);
  }
}
