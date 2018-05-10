import { Component, OnInit, EventEmitter } from '@angular/core';
import { ServicoService } from '../../shared/servico.service';
import { Profissionais } from '../../shared/interfaces/Profissionais';
import { Servicos } from '../../shared/interfaces/servicos';
import { RemoveAtPipe } from '../../shared/custom-pipes/removeAT.pipe';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  profissionaisConst: Profissionais[];
  profissionais: Profissionais[];
  servicos: any[];
  selectedProf: any;
  selectedDate: any;
  selectedTime: any;
  selectedServ: Servicos;
  id_procurar: any;
  data = new Date;
  dataAgora: string;
  horaAgora: string;




  constructor(private servicoService: ServicoService) {

  }


  async ngOnInit() {
    this.pegarServico(await this.servicoService.servicos());
    this.pegarProfissional(await this.servicoService.profissionais());
    this.setDay();
    this.setHour();
  }
  setDay() {
    this.dataAgora = "" + this.complementoDatas(this.data.getDate()) + "/" + this.complementoDatas((this.data.getMonth() + 1)) + "/" + this.complementoDatas(this.data.getFullYear());
  }
  setHour() {
    this.horaAgora = this.complementoDatas(this.data.getHours()) + ":" + this.complementoDatas(this.data.getMinutes());;
  }
  complementoDatas(x) {
    if (x < 10) { return "0" + x }
    return x;
  }
  pegarProfissional(x) {
    this.profissionais = x;
    this.profissionaisConst = x;
  }
  pegarServico(x) {
    this.servicos = x;
  }

  findProfByServ(servicoComparar: string) {
    let indexHave: number[] = [];
    let newProfissionais: Profissionais[] = [];
    for (let i: number = 0; i < this.profissionaisConst.length; i++) {
      if (this.profissionaisConst[i].servicos.find(servico => servico === servicoComparar) ? true : false) {
        indexHave.push(i);
      }
    }
    console.log(indexHave);
    for (let i: number = 0; i < indexHave.length; i++) {
      newProfissionais.push(this.profissionaisConst[indexHave[i]]);
    }
    return newProfissionais;
  }
  setProf(profissionalSelecionado: Profissionais) {
    this.selectedProf = profissionalSelecionado;
  }


  selectData(data) {
    if (data != undefined && data) {
      this.selectedDate = data;
      console.log("Data: " + data + " selecionada")
    } else {
      alert("Data inválida");
      document.getElementById("relogio").innerHTML = "00:00";
      this.setDay();
    }
  }
  selectTime(time) {
    console.log(time);
    if (time != undefined && time) {
      this.selectedTime = time;
    } else {
      alert("horário inválido")
      document.getElementById("relogio").innerHTML = "00:00";
    }

    this.setHour();
  }

  mudouServico(id: number) {
    this.id_procurar = id;
    this.selectedServ = this.servicos.filter(servico => servico.id === +this.id_procurar)[0];
    console.log("servico selecionado: " + this.selectedServ.nome)
    this.profissionais = this.findProfByServ(this.selectedServ.nome);
  }
  mudouProfissional(id: number) {
    this.id_procurar = id;
    console.log(this.id_procurar);
    this.selectedProf = this.profissionais.filter(profissional => profissional.id === +this.id_procurar)[0];
    console.log("Profissional selecionado: " + this.selectedProf.nome);
  }

}









export class DatePicker {

  birthDate: string;
  birthTime: string;

  birthDateActions = new EventEmitter<string | MaterializeAction>();
  birthTimeActions = new EventEmitter<string | MaterializeAction>();
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.birthDate = "03/12/2017";
    this.birthTime = "12:36";
    this.form = this.fb.group({
      'fromDate': new FormControl('06/07/2017'),
      'fromTime': new FormControl('08:30')
    });
  }



  openDatePicker() {
    //actions are open or close
    this.birthDateActions.emit({ action: "pickadate", params: ["open"] });
  }

  setTime(time) {
    this.birthTime = time;
  }

  openTimePicker() {
    //actions are show or hide
    this.birthTimeActions.emit({ action: "pickatime", params: ["show"] });
  }
}
