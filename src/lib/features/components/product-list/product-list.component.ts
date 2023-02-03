import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent {
  productName: string = 'Product 1';
  productDescription: string = 'Product 1 description';

  isDisabled: boolean = false;
}
