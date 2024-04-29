import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteExamenComponent } from './ajoute-examen.component';

describe('AjouteExamenComponent', () => {
  let component: AjouteExamenComponent;
  let fixture: ComponentFixture<AjouteExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteExamenComponent]
    });
    fixture = TestBed.createComponent(AjouteExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
