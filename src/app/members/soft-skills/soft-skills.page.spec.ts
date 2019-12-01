import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsPage } from './soft-skills.page';

describe('SoftSkillsPage', () => {
  let component: SoftSkillsPage;
  let fixture: ComponentFixture<SoftSkillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftSkillsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftSkillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
