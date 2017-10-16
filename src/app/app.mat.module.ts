import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';
import 'hammerjs';
@NgModule({
  imports: [
    BrowserAnimationsModule, MatButtonModule, MatIconModule
  ],
  exports: [
    MatButtonModule, MatIconModule,
  ]
})
export class AppMatModule { }