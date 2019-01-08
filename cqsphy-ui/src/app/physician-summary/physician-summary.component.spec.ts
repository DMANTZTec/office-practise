import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianSummaryComponent } from './physician-summary.component';

describe('PhysicianSummaryComponent', () => {
  let component: PhysicianSummaryComponent;
  let fixture: ComponentFixture<PhysicianSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
