import { TestBed } from '@angular/core/testing';

import { SalestandService } from './salestand.service';

describe('SalestandService', () => {
  let service: SalestandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalestandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
