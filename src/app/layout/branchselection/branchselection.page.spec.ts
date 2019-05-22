import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchselectionPage } from './branchselection.page';

describe('BranchselectionPage', () => {
  let component: BranchselectionPage;
  let fixture: ComponentFixture<BranchselectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchselectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
