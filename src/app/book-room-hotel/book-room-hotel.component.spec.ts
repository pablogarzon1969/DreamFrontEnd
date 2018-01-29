import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomHotelComponent } from './book-room-hotel.component';

describe('BookRoomHotelComponent', () => {
  let component: BookRoomHotelComponent;
  let fixture: ComponentFixture<BookRoomHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRoomHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoomHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
