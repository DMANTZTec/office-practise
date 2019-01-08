import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianScoreOvertimeComponent } from './physician-score-overtime.component';

describe('PhysicianScoreOvertimeComponent', () => {
  let component: PhysicianScoreOvertimeComponent;
  let fixture: ComponentFixture<PhysicianScoreOvertimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianScoreOvertimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianScoreOvertimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
