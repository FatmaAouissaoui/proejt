import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import { FournisseurService } from 'src/app/service/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private fournisseurService: FournisseurService) { }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      Nom: ['', Validators.required],
      Email: ['', Validators.required],
      Adresse: ['', Validators.required],
      Tel: ['', Validators.required]
    });
  }
  onSubmit() {
      this.fournisseurService.save(this.addForm.value)
        .subscribe( data => {
          this.router.navigate(['list-fournisseur']);
        });
    
  }

}