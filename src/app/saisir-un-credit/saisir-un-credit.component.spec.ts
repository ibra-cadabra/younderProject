import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirUnCreditComponent } from './saisir-un-credit.component';

describe('SaisirUnCreditComponent', () => {
  let component: SaisirUnCreditComponent;
  let fixture: ComponentFixture<SaisirUnCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirUnCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirUnCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
