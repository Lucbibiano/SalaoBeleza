import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServicosComponent }  from './servicos/servicos.component';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicosComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
