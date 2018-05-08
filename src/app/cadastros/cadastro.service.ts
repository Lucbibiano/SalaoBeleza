import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SALAO_API } from "../shared/API/api";



@Injectable()
export class CadastroService{
    constructor(private http: HttpClient){}

    addUser(usuario: Usuario){
        console.log("Estamos no serviço");
        if(!usuario.formacao){ // Cliente
            console.log("cliente");
            this.http.post(`${SALAO_API}/Clientes`, usuario).
            subscribe(retorno => {console.log("Cliente add ", retorno)})
        }
        else if(usuario.formacao){ // Funcionário
            console.log("func");
            this.http.post(`${SALAO_API}/Profissionais`, usuario)
            .subscribe(retorno => {console.log("Profissional add", retorno)})
        }
    }

}