import { TestBed } from '@angular/core/testing';

import { AdminguardServiceService } from './adminguard-service.service';

describe('AdminguardServiceService', () => {
  let service: AdminguardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminguardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
