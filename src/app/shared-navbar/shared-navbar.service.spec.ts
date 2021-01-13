import { TestBed } from '@angular/core/testing';

import { SharedNavbarService } from './shared-navbar.service';

describe('SharedNavbarService', () => {
  let service: SharedNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
