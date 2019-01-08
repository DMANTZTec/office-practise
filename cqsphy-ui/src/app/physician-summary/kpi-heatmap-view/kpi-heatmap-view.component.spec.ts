import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiHeatmapViewComponent } from './kpi-heatmap-view.component';

describe('KpiHeatmapViewComponent', () => {
  let component: KpiHeatmapViewComponent;
  let fixture: ComponentFixture<KpiHeatmapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiHeatmapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiHeatmapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
