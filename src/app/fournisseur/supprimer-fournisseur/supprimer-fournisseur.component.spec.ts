import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerFournisseurComponent } from './supprimer-fournisseur.component';

describe('SupprimerFournisseurComponent', () => {
  let component: SupprimerFournisseurComponent;
  let fixture: ComponentFixture<SupprimerFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
