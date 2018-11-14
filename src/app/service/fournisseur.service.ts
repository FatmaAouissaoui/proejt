import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Fournisseur} from "../model/fournisseur.model";
import { Observable } from 'rxjs/Observable';

/*import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';*/
@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  
  baseUrl: string = 'http://localhost:8080/fournisseur/front/fournisseur';

  constructor(public http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl + '/all');
  }

  

  delete(id : number){
    return this.http.delete(this.baseUrl+ '/all/' + id);
  }

  save(fournisseur : any) : Observable<any> {
    return this.http.post(this.baseUrl+ '/add', fournisseur);
  }

  update(fournisseur : any): Observable<any> {
    return this.http.put(this.baseUrl+ '/all/' +  fournisseur.id, fournisseur);

  }
  /*getournisseur: any;
  getFournisseur(): any {
    throw new Error("Method not implemented.");
  }
  getfournisseur(): any {
    throw new Error("Method not implemented.");
  }
  getfournisseurs(): any {
    throw new Error("Method not implemented.");
  }
  id: string;

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/fournisseur/front/fournisseur/add';

  getFournisseurss() {
    let fakeFournisseurs = [{nom: 'fatma' , emal: 'fatma.aouissaoui.job@gmail.com', adresse: 'kairouan', tel: '7777778'},
     {nom: 'nizar' , email: 'nizar.aouissaoui@gmail.com', adresse: 'paris',tel: '+3366945678'},
     {nom:'moufida' , email:'moufida.aouissaoui@gmail.com' , adresse: 'paris',tel: '75417889'},
   
   ];
   // return Observable.of(fakeUsers).delay(5000);
     return this.http.get<FournisseurService[]>(this.baseUrl);
  }

  getFournisseurById(id: number) {
    return this.http.get<FournisseurService>(this.baseUrl + '/' + id);
  }

  createFournisseur(fournisseur: FournisseurService) {
    return this.http.post(this.baseUrl, fournisseur);
  }

  updateFournisseur(fournisseur: FournisseurService) {
    return this.http.put(this.baseUrl + '/' + fournisseur.id, fournisseur);
  }

  deleteFournisseur(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }*/

}