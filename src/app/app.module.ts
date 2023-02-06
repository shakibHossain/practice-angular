import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from '../lib/features/components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/lib/shared/pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, ProductListComponent, FilterPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
