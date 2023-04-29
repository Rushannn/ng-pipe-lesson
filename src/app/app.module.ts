import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextTransformationPipe } from './pipes/text-taransform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextTransformationPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
