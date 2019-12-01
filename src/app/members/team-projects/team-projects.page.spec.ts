import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProjectsPage } from './team-projects.page';

describe('TeamProjectsPage', () => {
  let component: TeamProjectsPage;
  let fixture: ComponentFixture<TeamProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProjectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
