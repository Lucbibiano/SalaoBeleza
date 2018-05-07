import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../../shared/servico.service';
import { Profissionais } from '../../shared/interfaces/Profissionais';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profissionais: Profissionais[];
  selectedProf: any;
  selectedDate: any;
  selectedTime: any;
  constructor(private servicoService: ServicoService) {

  }

  ngOnInit() {
    this.servicoService.profissionais().subscribe(profissional => this.profissionais = profissional);
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
