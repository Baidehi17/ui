import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalExperienceComponent } from './digital-experience.component';

describe('DigitalExperienceComponent', () => {
  let component: DigitalExperienceComponent;
  let fixture: ComponentFixture<DigitalExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalExperienceComponent]
    });
    fixture = TestBed.createComponent(DigitalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
