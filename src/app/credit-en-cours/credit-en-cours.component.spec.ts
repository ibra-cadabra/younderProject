import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditEnCoursComponent } from './credit-en-cours.component';

describe('CreditEnCoursComponent', () => {
  let component: CreditEnCoursComponent;
  let fixture: ComponentFixture<CreditEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
