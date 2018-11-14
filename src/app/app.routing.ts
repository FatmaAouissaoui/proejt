import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur/edit-fournisseur/edit-fournisseur.component';
import { ModifierFournisseurComponent } from './fournisseur/modifier-fournisseur/modifier-fournisseur.component';
import { SupprimerFournisseurComponent } from './fournisseur/supprimer-fournisseur/supprimer-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { EditProduitComponent } from './produit/edit-produit/edit-produit.component';
import { ModfierProduitComponent } from './produit/modfier-produit/modfier-produit.component';
import { SupprimerProduitComponent } from './produit/supprimer-produit/supprimer-produit.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },


  { path: 'add-fournisseur', component: AddFournisseurComponent },
  { path: 'list-fournisseur', component: ListFournisseurComponent },
  { path: 'edit-fournisseur', component: EditFournisseurComponent },
  { path: 'modifier-fournisseur', component: EditFournisseurComponent },
  { path: 'supprimer-fournisseur', component: EditFournisseurComponent },


  
  { path: 'add-produit', component: AddProduitComponent },
  { path: 'list-produit', component: ListProduitComponent },
  { path: 'edit-produit', component: EditProduitComponent },
  { path: 'modifier-produit', component: EditProduitComponent },
  { path: 'supprimer-produit', component: EditProduitComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);