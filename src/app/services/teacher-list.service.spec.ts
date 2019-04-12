import { TestBed } from '@angular/core/testing';

import { TeacherListService } from './teacher-list.service';

describe('TeacherListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherListService = TestBed.get(TeacherListService);
    expect(service).toBeTruthy();
  });
});
