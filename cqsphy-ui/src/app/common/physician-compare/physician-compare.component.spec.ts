import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianCompareComponent } from './physician-compare.component';

describe('PhysicianCompareComponent', () => {
  let component: PhysicianCompareComponent;
  let fixture: ComponentFixture<PhysicianCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
