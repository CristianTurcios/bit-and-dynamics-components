import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceHolder]'
})
export class PlaceHolderDirective {

  constructor() { }
  // constructor(public viewContainerRef: ViewContainerRef) { }  

}
