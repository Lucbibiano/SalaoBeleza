import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SALAO_API } from "../shared/API/api";

@Injectable()
export class CadastroService{
    constructor(private http: HttpClient){}

    clientes: any;
    profissionais: any;

    addUser(usuario: Usuario){
        if(!usuario.servicos){ // Cliente
            this.http.post(`${SALAO_API}/Clientes`, usuario).
            subscribe(retorno => {console.log("Cliente add ", retorno)})
        }
        else if(usuario.servicos){ // Funcionário
            this.http.post(`${SALAO_API}/Profissionais`, usuario)
            .subscribe(retorno => {console.log("Profissional add", retorno)})
        }
    }

    verificaUser(usuario): boolean{
        this.retornaClientes();
        if(this.clientes == undefined){
            return false;
        }
        for(let user of this.clientes){            
            if((""+usuario).trim() == (""+user.nome).trim()){
                return true;
            }
        }
        return false;
    }

    retornaClientes(){
        this.http.get(`${SALAO_API}/Clientes`).
        subscribe(retorno => {this.clientes = retorno})
    }
    
    retornaProfissionais(){
        this.http.get(`${SALAO_API}/Profissionais`).
        subscribe(retorno => {this.profissionais = retorno})
    }

}