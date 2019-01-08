import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsCornerComponent } from './doctors-corner.component';

describe('DoctorsCornerComponent', () => {
  let component: DoctorsCornerComponent;
  let fixture: ComponentFixture<DoctorsCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
