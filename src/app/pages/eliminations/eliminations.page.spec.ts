import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminationsPage } from './eliminations.page';

describe('EliminationsPage', () => {
  let component: EliminationsPage;
  let fixture: ComponentFixture<EliminationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
