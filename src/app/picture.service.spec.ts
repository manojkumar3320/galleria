import { TestBed } from '@angular/core/testing';

import { pictureService } from './picture.service';

describe('pictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: pictureService = TestBed.get(pictureService);
    expect(service).toBeTruthy();
  });
});
