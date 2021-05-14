import { TestBed } from '@angular/core/testing';

import { SidemenuServiceService } from './sidemenu-service.service';

describe('SidemenuServiceService', () => {
  let service: SidemenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidemenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
