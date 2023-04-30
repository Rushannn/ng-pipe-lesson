import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextTransformationPipe } from './pipes/text-taransform.pipe';
import { PipesComponent } from './components/pipes/pipes.component';
import { DateComponent } from './components/date/date.component';
import '@angular/common/locales/global/ru';
import { AppDatePipe } from './pipes/date.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TextTransformationPipe,
    PipesComponent,
    DateComponent,
    AppDatePipe,],
  imports: [
    BrowserModule
  ],
  providers: [
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
