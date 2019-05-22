import { TestBed } from '@angular/core/testing';

import { HttprequestinterceptorService } from './httprequestinterceptor.service';

describe('HttprequestinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttprequestinterceptorService = TestBed.get(HttprequestinterceptorService);
    expect(service).toBeTruthy();
  });
});
