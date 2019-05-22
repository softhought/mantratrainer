import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberassignmentProfilePage } from './memberassignment-profile.page';

describe('MemberassignmentProfilePage', () => {
  let component: MemberassignmentProfilePage;
  let fixture: ComponentFixture<MemberassignmentProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberassignmentProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberassignmentProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
