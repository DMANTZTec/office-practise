import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSummaryViewComponent } from './patient-summary-view.component';

describe('PatientSummaryViewComponent', () => {
  let component: PatientSummaryViewComponent;
  let fixture: ComponentFixture<PatientSummaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSummaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
