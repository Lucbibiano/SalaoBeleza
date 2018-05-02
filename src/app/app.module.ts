import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServicosComponent } from './servicos/servicos.component';


import { MaterializeModule } from 'angular2-materialize';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ServicoService } from './shared/servico.service';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { ListarProfComponent } from './profissionais/listar-prof/listar-prof.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicosComponent,
    ProfissionaisComponent,
    ListarProfComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
