import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent {
  productList: Product[] = [
    {
      name: 'Apple iPhone 12',
      description:
        'This product will have a battery that exceeds 80% capacity relative to new',
      image:
        'https://m.media-amazon.com/images/I/513NI5xpYjL.__AC_SX300_SY300_QL70_ML2_.jpg',
      price: 598,
    },
    {
      name: 'Apple iPhone 11',
      description: 'This product comes with a 90-day supplier-backed warranty',
      image: 'https://m.media-amazon.com/images/I/51cPOOgzp0L._AC_SX425_.jpg',
      price: 512,
    },
  ];

  isDisabled: boolean = false;

  fontSize: number = 16;

  applyClass: boolean = true;

  myColor: string = 'blue';

  attributeLabel: string = 'Set an attribute';

  isShowing: boolean = true;

  handleClick() {
    alert('Here');
  }

  // handleToggle() {
  //   this.isShowing = !this.isShowing;
  // }

  // handleInput(event: any) {
  //   console.log(event.target.value);
  // }
}
