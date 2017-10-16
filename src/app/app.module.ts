import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMatModule } from './app.mat.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
