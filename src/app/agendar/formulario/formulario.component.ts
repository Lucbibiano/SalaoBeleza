import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../../shared/servico.service';
import { Profissionais } from '../../shared/interfaces/Profissionais';
import { Servicos } from '../../shared/interfaces/servicos';
import { RemoveAtPipe } from '../../shared/custom-pipes/removeAT.pipe';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profissionais: Profissionais[];
  servicos: any[];
  selectedProf: any;
  selectedDate: any;
  selectedTime: any;
  selectedServ: Servicos;
  id_procurar: any;

  constructor(private servicoService: ServicoService) {

  }
  async ngOnInit() {
    this.pegarServico(await this.servicoService.servicos());
    this.pegarProfissional(await this.servicoService.profissionais());


  }
  pegarProfissional(x) {
    this.profissionais = x;
  }
  pegarServico(x) {
    this.servicos = x;
  }

  setProf(profissionalSelecionado: Profissionais) {
    this.selectedProf = profissionalSelecionado;
  }

  selectData(data) {
    console.log(data);
    if (data != undefined && data) {
      this.selectedDate = data;
      console.log("Data: " + data + " selecionada")
    } else {
      alert("Data inválida");
    }
  }
  selectTime(time) {
    console.log(time);
    if (time != undefined && time) {
      this.selectedTime = time;
    } else {
      alert("horário inválido")
    }
  }


  mudouServico(id: number) {
    this.id_procurar = id;
    this.selectedServ = this.servicos.filter(servico => servico.id === +this.id_procurar)[0];
    console.log("servico selecionado: " + this.selectedServ.nome)
  }
  mudouProfissional(id: number) {
    this.id_procurar = id;
    console.log(this.id_procurar);
    this.selectedProf = this.profissionais.filter(profissional => profissional.id === +this.id_procurar)[0];
    console.log("Profissional selecionado: " + this.selectedProf.Nome);
  }
}
