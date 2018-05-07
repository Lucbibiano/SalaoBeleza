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

  ngOnInit() {
    this.servicoService.profissionais().subscribe(profissionais => this.profissionais = profissionais);
  }
  setName(selectedProfissional: Profissionais) {
    this.moverAteCabecalho();
    console.log(selectedProfissional);
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
