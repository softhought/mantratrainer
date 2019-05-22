import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomtabmenusPage } from './bottomtabmenus.page';

describe('BottomtabmenusPage', () => {
  let component: BottomtabmenusPage;
  let fixture: ComponentFixture<BottomtabmenusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomtabmenusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomtabmenusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
