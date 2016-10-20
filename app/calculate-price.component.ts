import { Component,Input } from '@angular/core';
import {Product} from './product';
@Component({
    selector: 'calculate-price',
    template: `
    <div *ngIf="product">
        <h2>Product Price Calculator</h2>
        <div>Product price: <input [(ngModel)]="product.price"></div>
        <div>Quantity: <input [(ngModel)]="quantity"></div>
        <p>
          Total price: {{product.price | calculatePrice: quantity}}
        </p>
    </div>
  `
})
export class CalculatePriceComponent {
    @Input()
    product:Product;
    quantity=1;
   }
