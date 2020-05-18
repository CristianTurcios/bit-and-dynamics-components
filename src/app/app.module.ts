import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DynamicComponentModule } from 'ng-dynamic-component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DynamicComponentModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }