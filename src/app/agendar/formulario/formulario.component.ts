import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../../shared/servico.service';
import { Profissionais } from '../../shared/interfaces/Profissionais';
import { Servicos } from '../../shared/interfaces/servicos';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profissionais: Profissionais[];
  servicos:Servicos[];
  selectedProf: any;
  selectedDate: any;
  selectedTime: any;
  selectedServ:Servicos;
  constructor(private servicoService: ServicoService) {

  }

  ngOnInit() {
    this.servicoService.profissionais().subscribe(profissional => this.profissionais = profissional);
    this.servicoService.servicos().subscribe(servicos => this.servicos = servicos);
  }
  setName(profissionalSelecionado: Profissionais) {
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
      }else{
        alert("horário inválido")
      }
  }
}
