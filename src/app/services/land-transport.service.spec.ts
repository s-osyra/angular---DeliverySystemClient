import { TestBed } from '@angular/core/testing';

import { LandTransportService } from './land-transport.service';

describe('LandTransportService', () => {
  let service: LandTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
