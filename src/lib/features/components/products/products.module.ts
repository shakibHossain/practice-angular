import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterPipe } from 'src/lib/features/components/products/pipes/filter.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductListComponent, ProductDetailsComponent, FilterPipe],
  providers: [ProductsService],
  imports: [CommonModule, FormsModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
