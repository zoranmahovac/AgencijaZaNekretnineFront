import { TestBed } from '@angular/core/testing';

import { TipklijentaService } from './tipklijenta.service';

describe('TipklijentaService', () => {
  let service: TipklijentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipklijentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
