import { TestBed } from '@angular/core/testing';

import { ApiCommInterceptor } from './api-comm.interceptor';

describe('ApiCommInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiCommInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiCommInterceptor = TestBed.inject(ApiCommInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
