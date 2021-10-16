import { TestBed } from '@angular/core/testing';

import { TrackDataService } from './track-data.service';

describe('TrackDataService', () => {
  let service: TrackDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
