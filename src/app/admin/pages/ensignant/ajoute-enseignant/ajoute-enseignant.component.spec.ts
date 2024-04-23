import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteEnseignantComponent } from './ajoute-enseignant.component';

describe('AjouteEnseignantComponent', () => {
  let component: AjouteEnseignantComponent;
  let fixture: ComponentFixture<AjouteEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteEnseignantComponent]
    });
    fixture = TestBed.createComponent(AjouteEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
