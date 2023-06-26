import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCalculatorComponent } from './payment-calculator.component';

describe('PaymentCalculatorComponent', () => {
  let component: PaymentCalculatorComponent;
  let fixture: ComponentFixture<PaymentCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
