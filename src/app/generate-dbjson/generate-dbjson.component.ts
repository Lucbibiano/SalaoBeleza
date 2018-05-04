import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-dbjson',
  templateUrl: './generate-dbjson.component.html',
  styleUrls: ['./generate-dbjson.component.css']
})
export class GenerateDbjsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.gerarDB());

    /*     console.log("nome: " + this.gerarNome());
        console.log("CPF: " + this.gerarCPF());
        console.log("RG: " + this.gerarRG());
        console.log("Idade " + this.gerarIdade());
        console.log("CEP: " + this.gerarCEP());
        console.log("Telefone: " + this.gerarTelefone());
        console.log("Formações: " + this.gerarFormacao());
        console.log("Casa: " + this.gerarNCasa());  */
  }

  bancoGerado: string[] = [];
  usuarios: string[] = [];
  quantos:number=10;
  gerarDB() {

    let i = 0;
    while (i < 1) {

      this.bancoGerado[i] = `{
        "Profissionais": [
          
            ${this.gerarProf(this.quantos)}
          

        ],
        "Clientes": [
         
            ${this.gerarCli(this.quantos)}
          
        ],
        "Servicos": [
          {
            "id": ${i + 1},
            "nome": "unhas",
            "tempoM": 5.5,
            "Preco": 50,
            "Img": ""
          }
        ],
        "Aval": [
          {
            "id_Prof": null,
            "id_Cli":  ,
            "Descricao":~/. ,
            "nota": 3
          }
        ],
        "Agendados": [
          {
            "id": ~/. ,
            "id_Prof": ~/. ,
            "id_Cli": ~/. ,
            "data_horario": "",
            "id_Serv": ~/.
          }
        ]
      }`;
      console.log(this.bancoGerado);
      i++;


    }

  }
  gerarCli(i) {
    let j = 0;
    let CLis: string[] = [];

    while (j < i) {
      let nome = this.gerarNome();
      CLis[j] = `{
    "id": ${j + 1},
    "nome":" ${nome}",
    "CPF":" ${this.gerarCPF()}",
    "CEP": "${this.gerarCEP()}",
    "usuario": "${nome}",
    "senha": "${nome}",
    "imagem": ""
    }`;
      j++;
    }

    return CLis;
  }

  gerarProf(i) {

    let j = 0
    let Profs: string[] = [];
    while (j < i) {
      let nome = this.gerarNome();
      Profs[j] =
        `{
    "id": ${j + 1},
    "Nome": "@${nome}",
    "CPF": "${this.gerarCPF()}",
    "Idade": ${this.gerarIdade()},
    "RG": "${this.gerarRG()}",
    "CEP": "${this.gerarCEP()}",
    "Formacao": [${this.gerarFormacao()}
    ],
    "Telefone": 119${this.gerarTelefone()},
    "NumeroCasa":" ${this.gerarNCasa()}",
    "Usuario": "${nome}",
    "Tipo":"1",
    "Senha": "${nome}",
    "Imagem": ""
  }`;
      j++;
    }
    return (Profs)
  }
  gerarNome() {
    let nomes, sobrenome: string[] = [];
    nomes = ["Gustavo", "Pedro", "Livia", "Eduarda", "Bruna", "Bruno", "Lucas", "Olivia", "Matheus", "Mohamed"];
    sobrenome = ["Bibiano", "Amaral", "Silva", "Sousa", "Arsenio", "Costa", "Oliveira", "Domingues", "Ahmad", " Hassan"];
    return (nomes[Math.floor((Math.random()) * nomes.length)] + " " + sobrenome[Math.floor((Math.random()) * sobrenome.length)]);
  }

  gerarCPF() {
    let i = 0;
    let cpf: string = "";
    while (i < 11) {
      cpf += Math.floor(Math.random() * 9);
      i++;
    }
    return cpf;
  }
  gerarIdade() {
    let idade: number = 0;
    while (idade < 18) {
      idade = Math.floor((Math.random()) * 40)
    }
    return (idade)
  }
  gerarRG() {
    let i = 0;
    let RG: string = "";
    while (i < 9) {
      RG += Math.floor(Math.random() * 9);
      i++;
    }
    return RG;
  }
  gerarCEP() {
    let i = 0;
    let CEP: string = "";
    while (i < 8) {
      CEP += Math.floor(Math.random() * 9);
      i++;
    }
    return CEP;
  }
  gerarFormacao() {
    let formacao = ["Analise de Sistemas", "Engenharia da Computação", "Ciência da Computação", "Redes", "Sistemas da Informação", "Tecnologia da Informação"];
    let i = 0;
    let formacoes: string = "";
    let sorteado: number[] = [];
    while (i < 2) {
      sorteado[i] = Math.floor(Math.random() * formacao.length);
      if (sorteado[i - 1] != sorteado[i]) {
        if (i > 0) {
          formacoes += " , "
        }
        formacoes += `" ${formacao[sorteado[i]]} " `;

        i++;
      }
    }

    return formacoes;
  }
  gerarTelefone() {
    let i = 0;
    let Tel: string = "";
    while (i < 8) {
      Tel += Math.floor(Math.random() * 9);
      i++;
    }
    return Tel;
  }
  gerarNCasa() {
    let i = 0;
    let n: string = "";
    while (i < 2) {
      n += Math.floor(Math.random() * 9);
      i++;
    }
    return n;

  }
  gerarUsuario() {

  }
  gerarSenha() {

  }
}