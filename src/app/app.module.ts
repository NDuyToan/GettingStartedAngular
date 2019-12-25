import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { from } from 'rxjs';
//service
import { CartService} from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
const appRoutes:Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'products/:productId',
    component: ProductDetailsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    ProductListComponent,
    TopBarComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent}
    ])
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
