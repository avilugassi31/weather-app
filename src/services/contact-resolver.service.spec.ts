import { TestBed } from '@angular/core/testing';

import { ContactResolver } from './contact-resolver.service';

describe('ContactResolver.ServiceService', () => {
  let service: ContactResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
