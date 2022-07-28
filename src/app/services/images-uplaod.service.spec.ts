import { TestBed } from '@angular/core/testing';

import { ImagesUplaodService } from './images-uplaod.service';

describe('ImagesUplaodService', () => {
  let service: ImagesUplaodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesUplaodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
