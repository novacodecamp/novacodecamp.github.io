import { Component, OnInit } from '@angular/core';
import { Room, Session, SessionizeApiResult, SessionizeService } from '../sessionize-service.service';

@Component({
  selector: 'app-per-track-speakers',
  templateUrl: './per-track-speakers.component.html',
  styleUrls: ['./per-track-speakers.component.scss']
})
export class PerTrackSpeakersComponent implements OnInit {
  public rooms: Room[] = [];
  public activeRoom: Room = null;
  public sessions: Session[] = [];

  private sessionizeApiResult: SessionizeApiResult;


  constructor(private sessionizeService: SessionizeService) { }

  public ngOnInit(): void {
    this.sessionizeService.getSessionizeData().subscribe(sessionizeApiResult => {
      this.sessionizeApiResult = sessionizeApiResult;
      this.rooms = sessionizeApiResult.rooms;
      this.setRoom(this.rooms[this.rooms.length - 1]);
    });
  }

  public setRoom(room: Room): void {
    this.activeRoom = room;
    this.sessions = this.sessionizeApiResult.sessions.filter(s => s.roomId === room.id && s.speakers.length === 1);
    this.sessions.forEach(session => {
      session.speaker = this.sessionizeApiResult.speakers.find(s => s.id === session.speakers[0]);
    });
  }
}
