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

  servicos(): Observable<Servicos[]> {

    return this.http.get(`${SALAO_API}/Servicos`)
      .map(response => response.json());

  }
  profissionais(): Observable<Profissionais[]> {
    return this.http.get(`${SALAO_API}/Profissionais`)
      .map(response => response.json());
  }
}