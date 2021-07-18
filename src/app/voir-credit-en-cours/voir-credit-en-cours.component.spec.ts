import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirCreditEnCoursComponent } from './voir-credit-en-cours.component';

describe('VoirCreditEnCoursComponent', () => {
  let component: VoirCreditEnCoursComponent;
  let fixture: ComponentFixture<VoirCreditEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirCreditEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirCreditEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
