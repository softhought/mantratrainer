import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedmembertabPage } from './assignedmembertab.page';

describe('AssignedmembertabPage', () => {
  let component: AssignedmembertabPage;
  let fixture: ComponentFixture<AssignedmembertabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedmembertabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedmembertabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
