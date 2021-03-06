import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TextFormatPipe } from './text-format.pipe';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TextFormatPipe
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
