import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/products">Products</a>
   </nav>
   <router-outlet></router-outlet>       
        `
})
export class AppComponent {
    title = 'Store of Products';
}
