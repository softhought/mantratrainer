import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtabPage } from './secondtab.page';

describe('SecondtabPage', () => {
  let component: SecondtabPage;
  let fixture: ComponentFixture<SecondtabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondtabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
