import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from 'src/lib/features/components/products/products.module';
import { CartComponent } from 'src/lib/features/components/cart/components/cart.component';
import { ButtonComponent } from '../lib/shared/button/button.component';
import { NavbarComponent } from '../lib/core/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, CartComponent, ButtonComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ProductsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
