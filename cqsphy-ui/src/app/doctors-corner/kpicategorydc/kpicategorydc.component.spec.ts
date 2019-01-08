import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpicategorydcComponent } from './kpicategorydc.component';

describe('KpicategorydcComponent', () => {
  let component: KpicategorydcComponent;
  let fixture: ComponentFixture<KpicategorydcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpicategorydcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpicategorydcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
