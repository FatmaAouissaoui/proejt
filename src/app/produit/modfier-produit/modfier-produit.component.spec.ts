import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModfierProduitComponent } from './modfier-produit.component';

describe('ModfierProduitComponent', () => {
  let component: ModfierProduitComponent;
  let fixture: ComponentFixture<ModfierProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModfierProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModfierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
