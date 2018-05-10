import { Directive, HostListener, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appFormataCamposDiretiva]'
})
export class FormataCamposDiretivaDirective {

  constructor(private elemento: ElementRef) { }
  @Input('appFormataCamposDiretiva') formato;

  @HostListener('blur') onBlur() { //Aplica a formatação do CPF, colocando pontos e traço.
    let valor: string = this.elemento.nativeElement.value;

    if (this.formato == 'formataCpf') {
      if (valor.indexOf('-') == 11) { // verifica se o elemento já foi "completamente preenchido".

      } else {
        if (valor.length > 3) {
          valor = valor.substring(0, 3) + "." + valor.substring(3, 6) + "." +
            valor.substring(6, 9) + "-" + valor.substring(9, 11);
          this.elemento.nativeElement.value = valor;
        }
      }
    }
    else if (this.formato == 'formataRg') {
      if (valor.indexOf('-') == 8) {

      } else {
        if (valor.length > 8) {
          valor = valor.substring(0, 8) + "-" + valor.substring(8, 10);
          this.elemento.nativeElement.value = valor;
        }
      }
    }
    else if (this.formato == 'formatoTelefone') {
      if (valor.indexOf('-') == 11) { // verifica se o elemento já foi "completamente preenchido".
      } else {
        if (valor.length > 2) {
          valor = "(" + valor.substring(0, 2) + ")" + valor.substring(2, 7) + "-" + valor.substring(7, 11);
          this.elemento.nativeElement.value = valor;
        }
      }
    }
    else if (this.formato == 'formatoCep') {
      if (valor.indexOf('-') == 8) {

      } else {
        if (valor.length >= 8) {
          valor = valor.substring(0, 5) + "-" + valor.substring(5, 8);
          this.elemento.nativeElement.value = valor;
        }
      }
    }
  }
  @HostListener('input') oninput() { //Limita a digitação.
        if (this.formato == 'formataCpf' || this.formato == 'formatoTelefone') {
          if (this.elemento.nativeElement.value.length >= 11) {
            this.elemento.nativeElement.value = this.elemento.nativeElement.value.substring(0, 11);
          }
        }
        else if (this.formato == "formataRg") {
          if (this.elemento.nativeElement.value.length >= 9) {
            this.elemento.nativeElement.value = this.elemento.nativeElement.value.substring(0, 9);
          }
        }
        else if (this.formato == "formatoCep") {
            if (this.elemento.nativeElement.value.length >= 8) {
            this.elemento.nativeElement.value = this.elemento.nativeElement.value.substring(0, 8);
          }
        }
      }
  }