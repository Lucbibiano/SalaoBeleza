import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicoService } from '../shared/servico.service';

import { Profissionais } from '../shared/interfaces/Profissionais';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {
  showSelected: Profissionais;
  profissionais: Profissionais[]
  letra: string;
  @ViewChild('showSelect') public showSelect: ElementRef;

  constructor(private servicoService: ServicoService) { }

  async ngOnInit() {
    this.pegarProfissional(await this.servicoService.profissionais());

  }
  pegarProfissional(x) {
    this.profissionais = x;
  }
  
  setName(selectedProfissional: Profissionais) {
    this.moverAteCabecalho();
    console.log("Selecionado: "+selectedProfissional);
    if (selectedProfissional.Masculino) {
      this.letra = "o";
    } else {
      this.letra = "a";
    }
    this.showSelected = selectedProfissional;
  }

  moverAteCabecalho() {
    this.showSelect.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
  }

}
