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
  componentRef: ComponentRef<any> = null;
  
  constructor(
    private resolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Examples
    this.simpleImport();
    this.importComponentAndPassInputs();
    this.importFromExternalSource();
    this.importFromDifferentModule();
  }

  // 1. A simple import without passing any input or receiving any output
  simpleImport() {
    this.lazyComp = import('./test/test.component').then(({ TestComponent }) => TestComponent);
  }

  // 2.An import but passing inputs to the component
  importComponentAndPassInputs() {
    import('./test/test.component').then(({ TestComponent }) => {
      this.componentRef = this.compDynamicContainer.createComponent(
        this.resolver.resolveComponentFactory(TestComponent)
      );

      this.componentRef.instance.hello = 'hello';
      const message = this.componentRef.instance.getMessage('calling a function inside dynamic component');
      console.log('message', message);
    });
  }

  // 3. Importing a component that does not exist in our code from bit.dev
  importFromExternalSource() {
    this.productListComponent = import('@bit/bit.angular-tutorial.product-list').then(m => m.ɵa);
  }

  // 4. Importing a component from a different module to the app.module
  // another way to import dinner component, but also work the same way of we import in line 30
  importFromDifferentModule () {
    this.dinnercomponent = import('./menu/dinner/dinner.component').then(m => m.DinnerComponent);
  }
}
