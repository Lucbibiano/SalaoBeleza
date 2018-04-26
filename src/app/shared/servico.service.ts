import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SALAO_API } from './API/api'

import { Servicos } from './interfaces/servicos'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/Map';
import 'rxjs/add/operator/catch'

@Injectable()
export class ServicoService {

  servicos(): Observable<Servicos[]> {

    return this.http.get(`${SALAO_API}/Servicos`).map(Response => Response.json());

  }

  constructor(private http: Http) {
  }
}