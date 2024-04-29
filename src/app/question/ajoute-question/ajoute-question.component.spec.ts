import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteQuestionComponent } from './ajoute-question.component';

describe('AjouteQuestionComponent', () => {
  let component: AjouteQuestionComponent;
  let fixture: ComponentFixture<AjouteQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteQuestionComponent]
    });
    fixture = TestBed.createComponent(AjouteQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
