import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMachineAssignmentPage } from './member-machine-assignment.page';

describe('MemberMachineAssignmentPage', () => {
  let component: MemberMachineAssignmentPage;
  let fixture: ComponentFixture<MemberMachineAssignmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberMachineAssignmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMachineAssignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
