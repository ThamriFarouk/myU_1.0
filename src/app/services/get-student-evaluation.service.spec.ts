import { TestBed } from '@angular/core/testing';

import { GetStudentEvaluationService } from './get-student-evaluation.service';

describe('GetStudentEvaluationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStudentEvaluationService = TestBed.get(GetStudentEvaluationService);
    expect(service).toBeTruthy();
  });
});
