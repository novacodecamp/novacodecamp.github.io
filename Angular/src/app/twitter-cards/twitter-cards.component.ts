import { Component, OnInit } from '@angular/core';
import { SessionizeApiResult, SessionizeService } from '../sessionize-service.service';

@Component({
  selector: 'app-twitter-cards',
  templateUrl: './twitter-cards.component.html',
  styleUrls: ['./twitter-cards.component.scss']
})
export class TwitterCardsComponent implements OnInit {
  public sessionizeApiResult: SessionizeApiResult = null;

  constructor(private sessionizeService: SessionizeService) { }

  ngOnInit(): void {
    this.sessionizeService.getSessionizeData().subscribe(sessionizeApiResult => {
      this.sessionizeApiResult = sessionizeApiResult;
    });
  }

}
