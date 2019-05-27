import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberemployeeqrlayoutPage } from './memberemployeeqrlayout.page';

describe('MemberemployeeqrlayoutPage', () => {
  let component: MemberemployeeqrlayoutPage;
  let fixture: ComponentFixture<MemberemployeeqrlayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberemployeeqrlayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberemployeeqrlayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
