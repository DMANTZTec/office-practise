import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianTileComponent } from './physician-tile.component';

describe('PhysicianTileComponent', () => {
  let component: PhysicianTileComponent;
  let fixture: ComponentFixture<PhysicianTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicianTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
