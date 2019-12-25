import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { from } from 'rxjs';
//service
import { CartService} from './cart.service';
import { CartComponent } from './cart/cart.component';
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
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent}
    ])
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
