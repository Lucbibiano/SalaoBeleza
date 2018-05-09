import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-gerar-imagens',
  templateUrl: './gerar-imagens.component.html',
  styleUrls: ['./gerar-imagens.component.css']
})
export class GerarImagensComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formularioImagem: FormGroup;
  imgFile: File;
  leitorImg = new FileReader();

  ngOnInit() {

    this.formularioImagem = this.fb.group({
      caminhoImagem: this.fb.control('', [Validators.required])
    })
  }

  onChange(event){
    this.imgFile = event.target.files[0];
    this.leitorImg.readAsDataURL(this.imgFile);
  }
}
