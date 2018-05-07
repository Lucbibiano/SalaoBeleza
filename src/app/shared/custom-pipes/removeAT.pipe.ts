import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'removeAT'
})
export class RemoveAtPipe implements PipeTransform{
    transform(nome: string): string{
        return nome = nome.substring(1, nome.length);
    }
}