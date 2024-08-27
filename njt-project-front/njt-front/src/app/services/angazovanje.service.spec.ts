import { TestBed } from '@angular/core/testing';

import { AngazovanjeService } from './angazovanje.service';

describe('AngazovanjeService', () => {
  let service: AngazovanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngazovanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
