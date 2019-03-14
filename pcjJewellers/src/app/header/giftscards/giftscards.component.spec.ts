import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftscardsComponent } from './giftscards.component';

describe('GiftscardsComponent', () => {
  let component: GiftscardsComponent;
  let fixture: ComponentFixture<GiftscardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftscardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
