import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainergenerateqrcodePage } from './trainergenerateqrcode.page';

describe('TrainergenerateqrcodePage', () => {
  let component: TrainergenerateqrcodePage;
  let fixture: ComponentFixture<TrainergenerateqrcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainergenerateqrcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainergenerateqrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
