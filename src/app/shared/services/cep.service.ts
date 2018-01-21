import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ViaCep} from "../model/via-cep";

@Injectable()
export class CepService {

  constructor(private http: HttpClient) {
  }

  getCEP(cep: string): Observable<ViaCep> {
    cep = cep.replace(/\D/g, '');
    if (cep != '') {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        return this.http.get<ViaCep>(`https://viacep.com.br/ws/${cep}/json/`)
      }
    }
  }
}
