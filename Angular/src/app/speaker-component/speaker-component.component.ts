import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionizeService, Speaker } from '../sessionize-service.service';

@Component({
  selector: 'app-speaker-component',
  templateUrl: './speaker-component.component.html',
  styleUrls: ['./speaker-component.component.scss'],
})
export class SpeakerComponentComponent implements OnInit {
  public speakerId: string;
  public speaker: Speaker;

  constructor(private route: ActivatedRoute, private sessionizeService: SessionizeService) {}

  ngOnInit(): void {
    const speakerId = this.route.snapshot.paramMap.get('id');
    this.speakerId = speakerId;
    this.sessionizeService.getSessionizeData().subscribe(sessionizeApiResult => {
      this.speaker = sessionizeApiResult.speakers.find(s => s.id === speakerId);
    });
  }
}
