import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, MinLengthValidator, FormControl } from '@angular/forms';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  cadastroUsuario: FormGroup;
  escolha: number = 0;
  usuarioIsValid: boolean = false;

  constructor(private cadastroServ: CadastroService) { }

  ngOnInit() {
    this.criaFormulario();
  }

  verificaUser(cadastroUsuario) {
    this.usuarioIsValid =  this.cadastroServ.verificaUser(""+cadastroUsuario.usuario);
  }


  criaFormulario() {
    this.cadastroUsuario = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(5)]),
      cpf: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      formacao: new FormControl(''),
      tipo: new FormControl(''),
      telefone: new FormControl(''),
      numeroCasa: new FormControl(''),
      rg: new FormControl(''),
      imagem: new FormControl(''),
      idade: new FormControl('')
    });
  }





  abrirForm(valor) {
    this.escolha = valor;
    console.log("A escolha é ", this.escolha);
  }

  addUser(usuario: Usuario) {
    console.log("user", usuario);
    // this.cadastroServ.addUser(usuario);
  }

}
