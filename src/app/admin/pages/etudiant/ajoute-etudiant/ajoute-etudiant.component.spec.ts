import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Add this import
import { AjouteEtudiantComponent } from './ajoute-etudiant.component';

import { EtudiantService } from 'src/app/admin/service/etudiant.service';

describe('AjouteEtudiantComponent', () => {
  let component: AjouteEtudiantComponent;
  let fixture: ComponentFixture<AjouteEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteEtudiantComponent ],
      imports: [HttpClientTestingModule],  // Add HttpClientTestingModule here
      providers: [EtudiantService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
