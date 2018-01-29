import { TestBed, inject } from '@angular/core/testing';

import { BookRoomHotelService } from './book-room-hotel.service';

describe('BookRoomHotelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookRoomHotelService]
    });
  });

  it('should be created', inject([BookRoomHotelService], (service: BookRoomHotelService) => {
    expect(service).toBeTruthy();
  }));
});
