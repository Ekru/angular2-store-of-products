import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    styleUrls: ['products.component.css'],
    selector: 'my-products',
    templateUrl: 'products.component.html'
})
export class ProductsComponent implements OnInit {
    constructor(
        private router: Router,
        private productService: ProductService) { }

    title = 'Products available in store';
    products: Product[];
    selectedProduct: Product;


    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }
    ngOnInit(): void {
        this.getProducts();
    }


    onSelect(product: Product): void {
        this.selectedProduct = product;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedProduct.id]);
    }
}
