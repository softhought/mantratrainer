import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonassignedmembertabPage } from './nonassignedmembertab.page';

describe('NonassignedmembertabPage', () => {
  let component: NonassignedmembertabPage;
  let fixture: ComponentFixture<NonassignedmembertabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonassignedmembertabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonassignedmembertabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
