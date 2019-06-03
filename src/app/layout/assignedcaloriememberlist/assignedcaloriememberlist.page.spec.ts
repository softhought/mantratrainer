import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedcaloriememberlistPage } from './assignedcaloriememberlist.page';

describe('AssignedcaloriememberlistPage', () => {
  let component: AssignedcaloriememberlistPage;
  let fixture: ComponentFixture<AssignedcaloriememberlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedcaloriememberlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedcaloriememberlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
