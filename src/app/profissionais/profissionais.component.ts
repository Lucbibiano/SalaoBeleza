import { Component, OnInit, Input } from '@angular/core';
import { ServicoService } from '../shared/servico.service';

import { Profissionais } from '../shared/interfaces/Profissionais';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {

  profissionais: Profissionais[]
  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.servicoService.profissionais().subscribe(profissionais => this.profissionais = profissionais);
  }


}
