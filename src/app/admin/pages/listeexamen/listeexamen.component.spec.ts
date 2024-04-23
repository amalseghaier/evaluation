import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeexamenComponent } from './listeexamen.component';

describe('ListeexamenComponent', () => {
  let component: ListeexamenComponent;
  let fixture: ComponentFixture<ListeexamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeexamenComponent]
    });
    fixture = TestBed.createComponent(ListeexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
