import { TestBed } from '@angular/core/testing';

import { GetStudentAttendanceService } from './get-student-attendance.service';

describe('GetStudentAttendanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStudentAttendanceService = TestBed.get(GetStudentAttendanceService);
    expect(service).toBeTruthy();
  });
});
