import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianSingleListComponent } from './physician-single-list.component';

describe('PhysicianSingleListComponent', () => {
  let component: PhysicianSingleListComponent;
  let fixture: ComponentFixture<PhysicianSingleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianSingleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianSingleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
