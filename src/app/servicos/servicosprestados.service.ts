import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SALAO_API } from '../shared/API/api'

import { Servicos } from '../shared/interfaces/servicos'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicoprestadoService {
 
numeroId:number;

  constructor(private http: Http) {
  }

  servicos(): Observable<Servicos[]> {

    return this.http.get(`${SALAO_API}/Servicos`)
      .map(response => response.json());

  }
  

}