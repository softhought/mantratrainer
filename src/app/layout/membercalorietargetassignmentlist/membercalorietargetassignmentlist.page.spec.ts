import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembercalorietargetassignmentlistPage } from './membercalorietargetassignmentlist.page';

describe('MembercalorietargetassignmentlistPage', () => {
  let component: MembercalorietargetassignmentlistPage;
  let fixture: ComponentFixture<MembercalorietargetassignmentlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembercalorietargetassignmentlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembercalorietargetassignmentlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
