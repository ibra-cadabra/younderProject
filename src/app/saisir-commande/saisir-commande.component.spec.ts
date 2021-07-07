import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SaisirCommandeComponent} from './saisir-commande.component';

describe('SaisirCommandeComponent', () => {
  let component: SaisirCommandeComponent;
  let fixture: ComponentFixture<SaisirCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaisirCommandeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
