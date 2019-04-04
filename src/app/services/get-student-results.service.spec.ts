import { TestBed } from '@angular/core/testing';

import { GetStudentResultsService } from './get-student-results.service';

describe('GetStudentResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStudentResultsService = TestBed.get(GetStudentResultsService);
    expect(service).toBeTruthy();
  });
});
