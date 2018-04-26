import { Component, OnInit } from '@angular/core';

import  { ServicoService } from '../shared/servico.service';
import { Servicos } from '../shared/interfaces/servicos';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  servicos: Servicos[];

  constructor( private servicoService:ServicoService) { }

  ngOnInit() {
    this.servicoService.servicos().subscribe(servicos => this.servicos = servicos );
    console.log(this.servicos);
  }

}
