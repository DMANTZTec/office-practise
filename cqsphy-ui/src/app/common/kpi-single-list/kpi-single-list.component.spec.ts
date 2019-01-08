import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiSingleListComponent } from './kpi-single-list.component';

describe('KpiSingleListComponent', () => {
  let component: KpiSingleListComponent;
  let fixture: ComponentFixture<KpiSingleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiSingleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiSingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
