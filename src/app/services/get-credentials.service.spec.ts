import { TestBed } from '@angular/core/testing';

import { GetCredentialsService } from './get-credentials.service';

describe('GetCredentialsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCredentialsService = TestBed.get(GetCredentialsService);
    expect(service).toBeTruthy();
  });
});
