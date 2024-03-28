import { TestBed } from '@angular/core/testing';

import { CachResolverService } from './cach-resolver.service';

describe('CachResolverService', () => {
  let service: CachResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
