import { Component, OnInit } from '@angular/core';
import { TrackDataService } from '../track-data.service';
import { WatchNowService } from '../watch-now.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private watchNowService: WatchNowService, 
    private trackDataService: TrackDataService
    ) { }

  public hours: Date[] = [];
  public tracks: Track[] = [];

  ngOnInit(): void {
    const trackNames = TrackDataService.trackNames;
    this.tracks = trackNames.map(n => <Track>{
      title: n,
      liveUrl: this.watchNowService.getUrlForRoom(n)
    })

    this.hours = this.trackDataService.getTimes();
  }
}

interface Track {
  id: number;
  title: string;
  liveUrl?: string;
}
