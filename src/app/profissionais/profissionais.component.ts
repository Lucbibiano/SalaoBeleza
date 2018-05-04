import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicoService } from '../shared/servico.service';

import { Profissionais } from '../shared/interfaces/Profissionais';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {
  showSelected: string;
  profissionais: Profissionais[]
  @ViewChild('showSelect') public showSelect: ElementRef;

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.servicoService.profissionais().subscribe(profissionais => this.profissionais = profissionais);
  }
  setName(selectedProfissional: Profissionais) {
    this.moverAteCabecalho();
    let letra: string;
    if (selectedProfissional.Masculino) {
      letra = "o";
    } else {
      letra = "a";
    }
    this.showSelected = "" + letra.toUpperCase() + " profissional " + selectedProfissional.Nome + " foi selecionad" + letra.toLowerCase();
  }

  moverAteCabecalho() {
    this.showSelect.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

}
