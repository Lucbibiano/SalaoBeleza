import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import 'materialize-css';
import {ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { AgendarComponent } from './agendar/agendar.component';
import { AppRoutingModule } from './app.routing.module';
import { ListarProfComponent } from './profissionais/listar-prof/listar-prof.component';
import { HttpModule } from '@angular/http';
import { ServicoprestadoService } from './servicos/servicosprestados.service';
import { ServicoComponent } from './servicos/servico/servico.component';
import { ServicoService } from './shared/servico.service';
import { GerarImagensComponent } from './gerar-imagens/gerar-imagens.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    ServicosComponent,
    ProfissionaisComponent,
    AgendarComponent,
    ListarProfComponent,
    ServicoComponent,
    GerarImagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ServicoprestadoService, ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
