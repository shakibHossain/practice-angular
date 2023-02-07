import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts() {
    return [
      {
        name: 'Apple iPhone 12',
        description:
          'This product will have a battery that exceeds 80% capacity relative to new',
        image:
          'https://m.media-amazon.com/images/I/513NI5xpYjL.__AC_SX300_SY300_QL70_ML2_.jpg',
        price: 598,
      },
      {
        name: 'Apple iPhone 12 Pro',
        description:
          'This product is in "Excellent condition". No signs of cosmetic damage when held 30 centimetres away',
        image: 'https://m.media-amazon.com/images/I/51n-83C8HYL._AC_SX425_.jpg',
        price: 799.99,
      },
      {
        name: 'Apple iPhone 11',
        description:
          'This product comes with a 90-day supplier-backed warranty',
        image: 'https://m.media-amazon.com/images/I/51cPOOgzp0L._AC_SX425_.jpg',
        price: 512,
      },
    ];
  }
}
