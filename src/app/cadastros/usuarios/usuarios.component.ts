import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, MinLengthValidator, FormControl, FormControlName } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import { ServicoprestadoService } from '../../servicos/servicosprestados.service'
import { Servicos } from '../../shared/interfaces/servicos';
import { Router } from '@angular/router';
import { Usuario } from './user';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  cadastroUsuario: FormGroup;
  escolha: number = 0;
  usuarioIsValid: boolean = false;
  imgFile: File;
  leitorImg = new FileReader();
  endImg: string;

  constructor(private cadastroServ: CadastroService, private rota: Router) { }

  ngOnInit() {
    this.criaFormulario();
    this.cadastroServ.getServicos();

  }

  onChange(event) {
    this.imgFile = event.target.files[0];
    this.leitorImg.readAsDataURL(this.imgFile);
  }

  verificaUser(cadastroUsuario) {
    this.usuarioIsValid = this.cadastroServ.verificaUser("" + cadastroUsuario.usuario);
  }

  criaFormulario() {
    this.cadastroUsuario = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$")]),
      usuario: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^[0-9]*$")]),
      senha: new FormControl('', [Validators.required]),
      servicos: new FormControl(''),
      tipo: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      numeroCasa: new FormControl('', [Validators.pattern("^[0-9]*$")]),
      rg: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]),
      idade: new FormControl('', [Validators.pattern("^[0-9]*$")])
    });
  }

  abrirForm(valor) {
    this.escolha = valor;
  }

  addUser(usuario: Usuario) {
    usuario.imagem = this.leitorImg.result;
    usuario.servicos = [String(usuario.servicos)]; //converte para vetor de string
    if(usuario.tipo==2 || usuario.tipo==3){
      usuario.nome = '@'+usuario.nome;
    }
    this.cadastroServ.addUser(usuario);
    window.location.reload();
  }
}
