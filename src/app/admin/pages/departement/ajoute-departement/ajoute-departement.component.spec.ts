import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteDepartementComponent } from './ajoute-departement.component';

describe('AjouteDepartementComponent', () => {
  let component: AjouteDepartementComponent;
  let fixture: ComponentFixture<AjouteDepartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteDepartementComponent]
    });
    fixture = TestBed.createComponent(AjouteDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
