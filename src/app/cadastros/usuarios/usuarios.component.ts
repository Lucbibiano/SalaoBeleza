import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private fb: FormBuilder, private cadastroServ: CadastroService) { }

  cadastroUsuario: FormGroup;
  controle: FormControlName;
  escolha: number = 0;

  abrirForm(valor){
    console.log("Ta dentro");
    this.escolha = valor;
    console.log("A escolha é ",this.escolha);
  }

  ngOnInit() {
    this.cadastroUsuario = this.fb.group({
      nome: this.fb.control(''),
      cpf: this.fb.control(''),
      usuario: this.fb.control(''),
      cep: this.fb.control(''),
      senha: this.fb.control(''),
      formacao: this.fb.control(''),
      tipo: this.fb.control(''),
      telefone: this.fb.control(''),
      numeroCasa: this.fb.control(''),
      rg: this.fb.control(''),
      imagem: this.fb.control(''),
      idade: this.fb.control('')
    })
  }
  addUser(usuario: Usuario){
    console.log("user", usuario);
    // this.cadastroServ.addUser(usuario);
  }

}
