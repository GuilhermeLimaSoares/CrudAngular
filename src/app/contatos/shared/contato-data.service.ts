import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contato } from '../shared/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoDataService {
  // [x: string]: any;
  private contatoSource = new BehaviorSubject({ contato: null, key: ''});
  currentContato = this.contatoSource.asObservable();

  constructor() { }

  changeContato(contato: Contato, key: string){
    this.contatoSource.next({ contato: contato, key: key })
  };
}
