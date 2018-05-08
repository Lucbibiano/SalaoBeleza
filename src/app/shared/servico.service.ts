import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SALAO_API } from './API/api'

import { Servicos } from './interfaces/servicos';
import { Profissionais } from './interfaces/Profissionais';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicoService {

  constructor(private http: Http) {
  }

  async servicos(): Promise<any[]> {
    const response = await this.http.get(`${SALAO_API}/Servicos`).toPromise();


    return response.json();

  }
  async profissionais(): Promise<any[]> {
    const response = await this.http.get(`${SALAO_API}/Profissionais`).toPromise();

    
    return response.json();
  }

}