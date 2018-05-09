import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, MinLengthValidator, FormControl, FormControlName } from '@angular/forms';
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
  erro: string = "";

  constructor(private cadastroServ: CadastroService) { }

  ngOnInit() {
    this.criaFormulario();
  }

  verificaUser(cadastroUsuario) {
    this.usuarioIsValid =  this.cadastroServ.verificaUser(""+cadastroUsuario.usuario);
    console.log("teste");
    console.log(this.usuarioIsValid);
  }

  teste(t){
      console.log(t,"teste");
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
      numeroCasa: new FormControl('',[Validators.pattern("^[0-9]*$")]),
      rg: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]),
      imagem: new FormControl(''),
      idade: new FormControl('', [Validators.pattern("^[0-9]*$")])
    });
  }

  abrirForm(valor) {
    this.escolha = valor;
  }

  addUser(usuario: Usuario) {
    // this.cadastroServ.addUser(usuario);
  }

}
