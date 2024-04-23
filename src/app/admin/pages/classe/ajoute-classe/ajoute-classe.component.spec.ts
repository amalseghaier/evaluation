import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteClasseComponent } from './ajoute-classe.component';

describe('AjouteClasseComponent', () => {
  let component: AjouteClasseComponent;
  let fixture: ComponentFixture<AjouteClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteClasseComponent]
    });
    fixture = TestBed.createComponent(AjouteClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
