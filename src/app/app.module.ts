import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PlaceHolderDirective } from './place-holder.directive';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PlaceHolderDirective,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }