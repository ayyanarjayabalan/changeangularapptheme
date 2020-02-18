import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquarePipe } from './square.pipe';
import { GreentextDirective } from './greentext.directive';
import { AccordianComponent } from './shared/accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    SquarePipe,
    GreentextDirective,
    AccordianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
