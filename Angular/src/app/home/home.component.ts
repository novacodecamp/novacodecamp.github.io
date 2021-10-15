import { Component, OnInit } from '@angular/core';
import { WatchNowService } from '../watch-now.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private watchNowService: WatchNowService) { }

  public hours: Date[] = [];
  public tracks: Track[] = [];

  ngOnInit(): void {
    const trackNames = ['Web', 'Cloud', 'ML', 'Other'];
    this.tracks = trackNames.map(n => <Track>{
      title: n,
      liveUrl: this.watchNowService.getUrlForRoom(n)
    })

    const year = 2021;
    const month = 10;
    const day = 16;
    const hours2 = [ 
      [9, 0],
      [9, 30],
      [10, 30],
      [11, 30],
      [13, 0],
      [14, 0],
      [15, 0],
      [16, 0],
    ]
    this.hours = hours2.map(h => 
      new Date(year, month-1, day, h[0], h[1])
    );
  }
}

interface Track {
  id: number;
  title: string;
  liveUrl?: string;
}
