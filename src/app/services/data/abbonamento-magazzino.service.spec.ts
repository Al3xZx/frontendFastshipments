import { TestBed } from '@angular/core/testing';

import { AbbonamentoMagazzinoService } from './abbonamento-magazzino.service';

describe('AbbonamentoMagazzinoService', () => {
  let service: AbbonamentoMagazzinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbbonamentoMagazzinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
