import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ServicoService } from '../../shared/servico.service';
import { Profissionais } from '../../shared/interfaces/Profissionais';

@Component({
  selector: 'app-listar-prof',
  templateUrl: './listar-prof.component.html',
  styleUrls: ['./listar-prof.component.css']
})
export class ListarProfComponent implements OnInit {

  @Input() profissional: Profissionais;
  @Output() selecionado = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  selecionar(nome){
    console.log("O Funcionário: "+nome+", foi selecionado(a)");
    this.selecionado.emit(nome);
  }
}
