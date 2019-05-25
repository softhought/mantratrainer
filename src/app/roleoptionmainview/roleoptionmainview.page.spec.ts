import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleoptionmainviewPage } from './roleoptionmainview.page';

describe('RoleoptionmainviewPage', () => {
  let component: RoleoptionmainviewPage;
  let fixture: ComponentFixture<RoleoptionmainviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleoptionmainviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleoptionmainviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
