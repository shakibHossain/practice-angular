import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../lib/features/components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/lib/shared/pipes/filter.pipe';
import { ProductDetailsComponent } from '../lib/features/components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FilterPipe,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
