import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private produitService: ProduitService) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      Nom: ['', Validators.required],
      Quantité: ['', Validators.required],
      Prix: ['', Validators.required]
    
    });
  }
    onsubmit() {
      this.produitService.createProduit(this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['list-produit']);
        });
    
  }

}