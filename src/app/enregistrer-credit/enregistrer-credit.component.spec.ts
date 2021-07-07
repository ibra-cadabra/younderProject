import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrerCreditComponent } from './enregistrer-credit.component';

describe('EnregistrerCreditComponent', () => {
  let component: EnregistrerCreditComponent;
  let fixture: ComponentFixture<EnregistrerCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistrerCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistrerCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
