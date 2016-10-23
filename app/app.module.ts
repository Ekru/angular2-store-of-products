import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {CalculatePricePipe} from './calculate-price.pipe';
import {CalculatePriceComponent} from './calculate-price.component';
import { AppComponent }   from './app.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponent} from './products.component';
import { ProductService} from './product.service';
import { RouterModule }   from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports:      [ BrowserModule, FormsModule, AppRoutingModule],
    declarations: [ AppComponent, ProductDetailComponent,CalculatePricePipe,
                    CalculatePriceComponent,ProductsComponent,DashboardComponent],
    bootstrap:    [ AppComponent],
    providers: [ProductService]
})
export class AppModule { }
