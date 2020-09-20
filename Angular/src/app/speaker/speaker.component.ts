import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  SessionizeService,
  Speaker,
  Session,
} from '../sessionize-service.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponentComponent implements OnInit {
  public speakerId: string;
  public speaker: Speaker;
  public session: Session;
  public room: string;

  constructor(
    private route: ActivatedRoute,
    private sessionizeService: SessionizeService,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    const speakerId = this.route.snapshot.paramMap.get('id');
    this.speakerId = speakerId;
    this.metaService.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@novacodecamp' },
      { name: 'twitter:title', content: `loading...` },
    ]);
    this.sessionizeService
      .getSessionizeData()
      .subscribe((sessionizeApiResult) => {
        this.speaker = sessionizeApiResult.speakers.find(
          (s) => s.id === speakerId
        );

        this.session = sessionizeApiResult.sessions.find(
          (s) =>
            s.speakers.length === 1 && s.speakers.some((sp) => sp === speakerId)
        );

        this.room = sessionizeApiResult.rooms.find(
          (r) => r.id === this.session.roomId
        ).name;

        this.titleService.setTitle(
          `${this.speaker.firstName} ${this.speaker.lastName}`
        );
        this.metaService.addTags([
          {
            name: 'description',
            content: `${this.speaker.firstName} ${this.speaker.lastName}: ${this.speaker.tagLine}`,
          },
          { name: 'robots', content: 'index, follow' },
          { name: 'twitter:description', content: `${this.speaker.bio}` },
          { name: 'twitter:image', content: `${this.speaker.profilePicture}` },
        ]);
        this.metaService.updateTag(
          {
            name: 'twitter:title',
            content: `${this.speaker.firstName} ${this.speaker.lastName}`,
          },
          "name='twitter:title'"
        );
      });
  }
}
