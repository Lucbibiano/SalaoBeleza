import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicoprestadoService } from '../servicosprestados.service';
import { Servicos } from '../../shared/interfaces/servicos';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {

  servicos: Servicos[]
  id:number;
  nomeService:String;
  tempoMedio:number;
  precoService:number;
  imagem:string="ESSA È A IMAGEM"
  

  constructor(private route:ActivatedRoute, private servicoService:ServicoprestadoService) { 

    this.id = this.route.snapshot.params['id'];
    

  }

  ngOnInit() {

    
  this.servicoService.servicos().subscribe(servicos => { this.printar(servicos), this.servicos = servicos } );

   

  }
  
  printar(sla){
       
  var i;

  for(i = 0; i < sla.length; i++){
     
     if(this.id  ==  sla[i].id){
 
      this.nomeService = sla[i].nome;
      this.tempoMedio = sla[i].tempoM;
      this.precoService = sla[i].Preco;
 
     }
  }
} 

}
