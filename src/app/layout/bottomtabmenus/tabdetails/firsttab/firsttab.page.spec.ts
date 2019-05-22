import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttabPage } from './firsttab.page';

describe('FirsttabPage', () => {
  let component: FirsttabPage;
  let fixture: ComponentFixture<FirsttabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
