import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoveUsComponent } from './customer-love-us.component';

describe('CustomerLoveUsComponent', () => {
  let component: CustomerLoveUsComponent;
  let fixture: ComponentFixture<CustomerLoveUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerLoveUsComponent]
    });
    fixture = TestBed.createComponent(CustomerLoveUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
