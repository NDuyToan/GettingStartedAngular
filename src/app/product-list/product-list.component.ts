import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
//   public products:any[]= [
//     {
//     id: 1,
//     name: 'Phone XL',
//     description: 'A large phone with one of the best screens',
//     price: 800
//   },
//   {
//     id: 2,
//     name: 'Phone Mini',
//     description: 'A great phone with one of the best cameras',
//     price: 750
//   },
//   {
//     id: 3,
//     name: 'Phone Standard',
//     description: '',
//     price: 600
//   },
// ]
 products = products;
  constructor() { }

  ngOnInit() {
  }
  share(){
    alert('The product has been shared');
  }
  onNotify(){
    alert('You will be notified when the product goes on sale');
  }

}
