import { TestBed } from '@angular/core/testing';

import { GetStudentInternshipsService } from './get-student-internships.service';

describe('GetStudentInternshipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStudentInternshipsService = TestBed.get(GetStudentInternshipsService);
    expect(service).toBeTruthy();
  });
});
