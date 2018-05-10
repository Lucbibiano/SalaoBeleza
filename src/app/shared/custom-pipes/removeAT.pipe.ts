import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'removeAT'
})
export class RemoveAtPipe implements PipeTransform{
    transform(nome: string): string{
        if(nome.indexOf('@') == 0){
        return nome = nome.substring(1, nome.length);
    }
    else return nome;
    }
}