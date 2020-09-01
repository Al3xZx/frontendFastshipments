import { TestBed } from '@angular/core/testing';

import { AbbonamentoService } from './abbonamento.service';

describe('AbbonamentoService', () => {
  let service: AbbonamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbbonamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
