import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSummaryViewComponent } from './group-summary-view.component';

describe('GroupSummaryViewComponent', () => {
  let component: GroupSummaryViewComponent;
  let fixture: ComponentFixture<GroupSummaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSummaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
