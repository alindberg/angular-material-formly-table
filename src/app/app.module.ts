import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { TableRootComponent } from './formly/table-root.compoenet';


import { MyFormlyModule } from './formly/my-formly.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MaterialModule, MyFormlyModule ],
  declarations: [ AppComponent,  TableRootComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
