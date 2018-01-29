import { TestBed, inject } from '@angular/core/testing';

import { RoomAvailableService } from './room-available.service';

describe('RoomAvailableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomAvailableService]
    });
  });

  it('should be created', inject([RoomAvailableService], (service: RoomAvailableService) => {
    expect(service).toBeTruthy();
  }));
});
