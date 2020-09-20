import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public rooms: Room[] = [];
  public activeRoom: Room = null;
  public sessions: Session[] = [];

  private sessionizeApiResult: SessionizeApiResult;

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    const url = 'https://sessionize.com/api/v2/d5qrg1tt/view/All';
    this.http.get(url).subscribe(res => {
      const sessionizeApiResult = res as SessionizeApiResult;
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

interface SessionizeApiResult {
  sessions: Session[];
  speakers: Speaker[];
  questions: Question[];
  categories: Category[];
  rooms: Room[];
}

interface Session {
  id: string;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  roomId: number;
  speakers: string[];
  speaker: Speaker;
}

interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
}

interface Question {
  id: number;
  question: string;
}

interface Category {
  id: number;
  title: string;
}

interface Room {
  id: number;
  name: string;
}
