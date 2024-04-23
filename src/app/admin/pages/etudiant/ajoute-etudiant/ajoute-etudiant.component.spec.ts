import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteEtudiantComponent } from './ajoute-etudiant.component';

describe('AjouteEtudiantComponent', () => {
  let component: AjouteEtudiantComponent;
  let fixture: ComponentFixture<AjouteEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteEtudiantComponent]
    });
    fixture = TestBed.createComponent(AjouteEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
