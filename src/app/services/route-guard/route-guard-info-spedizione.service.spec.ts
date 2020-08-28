import { TestBed } from '@angular/core/testing';

import { RouteGuardInfoSpedizioneService } from './route-guard-info-spedizione.service';

describe('RouteGuardInfoSpedizioneService', () => {
  let service: RouteGuardInfoSpedizioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardInfoSpedizioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
