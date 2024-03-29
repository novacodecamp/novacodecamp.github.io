import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateConverterService } from '../date-converter.service';
import {
  Room,
  Session,
  SessionizeService,
} from '../sessionize-service.service';
import { TrackDataService } from '../track-data.service';
import { WatchNowService } from '../watch-now.service';

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
  styleUrls: ['./now-showing.component.scss'],
})
export class NowShowingComponent implements OnInit {
  public happeningNow: boolean = null;
  public date: Date;
  public nextDate: Date;
  public rooms: Room[];
  public sessionsByRoom: { [id: number]: Session } = {};
  public activeRoom: Room;

  constructor(
    private route: ActivatedRoute,
    private sessionizeService: SessionizeService,
    private dateConverterService: DateConverterService,
    private watchNowService: WatchNowService,
    private trackDataService: TrackDataService
  ) {}

  ngOnInit(): void {
    this.sessionizeService
      .getSessionizeData()
      .subscribe((sessionizeApiResult) => {
        this.rooms = sessionizeApiResult.rooms;
        console.info(this.rooms);

        this.route.params.subscribe((params) => {
          this.sessionsByRoom = {};
          const dateAsSeconds = parseInt(params.date, 10);
          const dateParam = new Date(dateAsSeconds);
          this.date = this.getNearestDate(dateParam);
          this.nextDate = this.getNextDate(this.date);

          const sessionsAtThisTime = sessionizeApiResult.sessions.filter(
            (s) => this.dateConverterService.toTime(s.startsAt) === this.date.getTime()
          );
          sessionsAtThisTime.forEach((s) => {
            s.speaker = sessionizeApiResult.speakers.find(
              (speaker) => s.speakers[0] === speaker.id
            );
            this.sessionsByRoom[s.roomId] = s;
          });
        });
      });
  }

  public setRoom(room: Room): void {
    this.activeRoom = room;
  }

  private getNextDate(date: Date): Date {
    return this.trackDataService.getTimes()
      .filter(t => t > date)[0];
  }

  private getNearestDate(date: Date): Date {
    return this.trackDataService.getTimes()
      .filter(t => t >= date)[0];
  }

  public getPlayUrl(room: Room): string {
    return this.watchNowService.getUrlForRoom(room.name);
  }

  public changeTitle(): void {
    this.happeningNow = !this.happeningNow;
  }
}
