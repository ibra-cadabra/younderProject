import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDuCreditComponent } from './details-du-credit.component';

describe('DetailsDuCreditComponent', () => {
  let component: DetailsDuCreditComponent;
  let fixture: ComponentFixture<DetailsDuCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDuCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDuCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
