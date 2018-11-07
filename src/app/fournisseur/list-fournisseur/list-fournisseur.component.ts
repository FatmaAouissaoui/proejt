import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FournisseurService } from 'src/app/service/fournisseur.service';
import { Fournisseur } from 'src/app/model/fournisseur.model';
@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurs: Fournisseur[];
  constructor(private router: Router, private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.fournisseurService.getFournisseur()
    .subscribe( data => {
      this.fournisseurs = data;
    });

  }
  deleteFournisseur(fournisseur: Fournisseur): void {
    this.fournisseurService.deleteFournisseur(fournisseur.id)
      .subscribe( data => {
        this.fournisseurs = this.fournisseurs.filter(u => u !== fournisseur);
      })
  };

  editFournisseur(fournisseur: Fournisseur): void {
    localStorage.removeItem("editFournisseurId");
    localStorage.setItem("editFournisseurId", fournisseur.id.toString());
    this.router.navigate(['edit-fournisseur']);
  };

  addFournisseur(): void {
    this.router.navigate(['add-fournisseur']);
  };
}