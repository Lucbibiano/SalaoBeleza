import { Component, OnInit } from '@angular/core';

import { Servicos } from '../shared/interfaces/servicos';
import { ServicoprestadoService } from './servicosprestados.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  servicos: Servicos[];
  cor = "yellow"
  seleciona:boolean = false;
  idService:number;

  constructor( private servicoService:ServicoprestadoService) { }

  ngOnInit() {
    this.servicoService.servicos().subscribe(servicos => this.servicos = servicos);

  }

 selecionar(servico){

  this.servicoService.numeroId = servico;

 }


}
