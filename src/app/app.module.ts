import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxShimmerLoadingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
