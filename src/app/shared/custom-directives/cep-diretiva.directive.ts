import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCepDiretiva]'
})
export class CepDiretivaDirective {
  @HostListener('focus') onFocus(){
    console.log("Focando");
  }

  @HostListener('blur') onBlur(){
    console.log("Desfocando");
  }


  constructor() { }

}
