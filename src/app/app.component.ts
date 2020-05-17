import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  lazyComp: Promise<any>;
  productListComponent: Promise<any>;
  dinnercomponent: Promise<any>;
  dinnercomponent1: Promise<any>;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.lazyComp = import('./test/test.component').then(({ TestComponent }) => TestComponent);
    this.productListComponent = import('@bit/bit.angular-tutorial.product-list').then(m => m.ɵa);
    // another way to import dinner component, but also work the same way of we import in line 22
    this.dinnercomponent = import('./menu/dinner/dinner.component').then(m => m.DinnerComponent);
  }
}
