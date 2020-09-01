import { TestBed } from '@angular/core/testing';

import { AnnunciService } from './annunci.service';

describe('AnnunciService', () => {
  let service: AnnunciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnunciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
