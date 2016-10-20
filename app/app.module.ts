import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {CalculatePricePipe} from './calculate-price.pipe';
import {CalculatePriceComponent} from './calculate-price.component';
import { AppComponent }   from './app.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ProductDetailComponent,CalculatePricePipe, CalculatePriceComponent ],
    bootstrap:    [ AppComponent]
})
export class AppModule { }
