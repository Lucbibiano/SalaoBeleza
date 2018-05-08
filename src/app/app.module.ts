import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import 'materialize-css';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { ServicosComponent } from './servicos/servicos.component';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { AgendarComponent } from './agendar/agendar.component';
import { AppRoutingModule } from './app.routing.module';
import { ListarProfComponent } from './profissionais/listar-prof/listar-prof.component';
import { ServicoprestadoService } from './servicos/servicosprestados.service';
import { ServicoComponent } from './servicos/servico/servico.component';
import { ServicoService } from './shared/servico.service';
import { GerarImagensComponent } from './gerar-imagens/gerar-imagens.component';
import { ClipboardModule } from 'ngx-clipboard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormularioComponent } from './agendar/formulario/formulario.component';
import { RemoveAtPipe } from './shared/custom-pipes/removeAT.pipe';
import { UsuariosComponent } from './cadastros/usuarios/usuarios.component';
import { CadastroService } from './cadastros/cadastro.service';
import { HttpClientModule } from '@angular/common/http';



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
    GerarImagensComponent,
    NavBarComponent,
    FormularioComponent, 
    RemoveAtPipe, 
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClipboardModule,
    FormsModule
  ],
  providers: [ServicoprestadoService, CadastroService, ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
