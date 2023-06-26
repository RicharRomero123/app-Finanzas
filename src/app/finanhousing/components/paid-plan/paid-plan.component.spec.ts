import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidPlanComponent } from './paid-plan.component';

describe('PaidPlanComponent', () => {
  let component: PaidPlanComponent;
  let fixture: ComponentFixture<PaidPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
