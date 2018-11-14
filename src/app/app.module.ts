import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from "./app.routing";
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material'
import { LoginComponent } from './login/login.component';
import {AuthService} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./service/user.service";
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
import { FournisseurService } from './service/fournisseur.service';
import { ProduitService } from './service/produit.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';

import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FournisseurComponent,
    AddFournisseurComponent,
    EditFournisseurComponent,
    ModifierFournisseurComponent,
    SupprimerFournisseurComponent,
    ListFournisseurComponent,
    ProduitComponent,
    AddProduitComponent,
    EditProduitComponent,
    ModfierProduitComponent,
    SupprimerProduitComponent,
    ListProduitComponent,
    HomeComponent,
    
   

  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [AuthService, UserService,FournisseurService,ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }