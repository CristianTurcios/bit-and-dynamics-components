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
    this.dinnercomponent = import('./menu/dinner/dinner.component').then(m => m.DinnerComponent);
    this.dinnercomponent1 = import('./menu/dinner/dinner.component').then(({ DinnerComponent }) => DinnerComponent);
  }
}
