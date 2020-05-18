import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
// import { PlaceHolderDirective } from './place-holder.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  lazyComp: Promise<any>;
  lazyComp1: Promise<any>;
  productListComponent: Promise<any>;
  dinnercomponent: Promise<any>;
  
  @ViewChild('componenteDinamico', { read: ViewContainerRef }) compDynamicContainer: ViewContainerRef;
  @ViewChild('componenteDinamico1', { read: ViewContainerRef }) compDynamicContainer1: ViewContainerRef;

  componentRef: ComponentRef<any> = null;
  componentRef1: ComponentRef<any> = null;
  
  constructor(
    private resolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
  }

  async ngAfterViewInit() {
    this.lazyComp = import('./test/test.component').then(({ TestComponent }) => TestComponent);
    this.lazyComp1 = import('./test/test.component').then(({ TestComponent }) =>  TestComponent);

    this.componentRef = this.compDynamicContainer.createComponent(
      this.resolver.resolveComponentFactory(await this.lazyComp1)
    );

    this.componentRef1 = this.compDynamicContainer1.createComponent(
      this.resolver.resolveComponentFactory(await this.lazyComp1)
    );

    this.componentRef.instance.hello = 'hello';
    const message = this.componentRef.instance.getMessage('calling a function inside dynamic component');
    console.log('message', message);
    

    this.productListComponent = import('@bit/bit.angular-tutorial.product-list').then(m => m.ɵa);
    // another way to import dinner component, but also work the same way of we import in line 22
    this.dinnercomponent = import('./menu/dinner/dinner.component').then(m => m.DinnerComponent);
  }
}
