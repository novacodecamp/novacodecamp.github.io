import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackDataService {
  constructor() { }

  public static readonly year = 2021;
  public static readonly month = 10;
  public static readonly day = 16;
  public static readonly hours = [ 
    [9, 0],
    [9, 30],
    [10, 30],
    [11, 30],
    [13, 0],
    [14, 0],
    [15, 0],
    [16, 0],
  ];

  public static readonly trackNames = ['Web', 'Cloud', 'ML', 'Other'];

  public getTimes(): Date[] {
    return TrackDataService.hours.map(h => 
      new Date(TrackDataService.year, TrackDataService.month-1, TrackDataService.day, h[0], h[1])
    );
  }
}
