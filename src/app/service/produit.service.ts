import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Produit} from "../model/produit.model";

/*import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Rx';*/
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  getProduit(): any {
    throw new Error("Method not implemented.");
  }
  getproduit(): any {
    throw new Error("Method not implemented.");
  }
  getproduits(): any {
    throw new Error("Method not implemented.");
  }
  id: string;

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/fournisseur/front/fournisseur/add';

  getProduits() {
    let fakeProduits = [{nom: 'fatma' , emal: 'fatma.aouissaoui.job@gmail.com', adresse: 'kairouan', tel: '7777778'},
     {nom: 'nizar' , email: 'nizar.aouissaoui@gmail.com', adresse: 'paris',tel: '+3366945678'},
     {nom:'moufida' , email:'moufida.aouissaoui@gmail.com' , adresse: 'paris',tel: '75417889'},
   
   ];
   // return Observable.of(fakeUsers).delay(5000);
     return this.http.get<ProduitService[]>(this.baseUrl);
  }

  getProduitById(id: number) {
    return this.http.get<ProduitService>(this.baseUrl + '/' + id);
  }

  createProduit(produit: ProduitService) {
    return this.http.post(this.baseUrl, produit);
  }

  updateProduit(produit: ProduitService) {
    return this.http.put(this.baseUrl + '/' + produit.id, produit);
  }

  deleteProduit(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}