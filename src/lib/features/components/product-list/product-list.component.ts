import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent {
  name1: string = 'Apple iPhone 12';
  description1: string =
    'This product will have a battery that exceeds 80% capacity relative to new';
  image1: string =
    'https://m.media-amazon.com/images/I/513NI5xpYjL.__AC_SX300_SY300_QL70_ML2_.jpg';
  price1: number = 598;

  name2: string = 'Apple iPhone 11';
  description2: string =
    'This product comes with a 90-day supplier-backed warranty';
  image2: string =
    'https://m.media-amazon.com/images/I/51cPOOgzp0L._AC_SX425_.jpg';
  price2: number = 512;

  isDisabled: boolean = false;

  fontSize: number = 16;

  handleClick() {
    alert('Here');
  }

  // handleInput(event: any) {
  //   console.log(event.target.value);
  // }
}
