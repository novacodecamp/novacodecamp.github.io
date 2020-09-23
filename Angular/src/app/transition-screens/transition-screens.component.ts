import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-transition-screens',
  templateUrl: './transition-screens.component.html',
  styleUrls: ['./transition-screens.component.scss']
})
export class TransitionScreensComponent implements OnInit {
  public msgBody: string;
  public msgBodyTemp: string;
  public msgTitle: string;
  public msgTitleTemp: string;

  constructor() { }

  ngOnInit(): void {
  }

  public showText(): void {
    this.msgTitle = this.msgTitleTemp;
    this.msgBody = this.msgBodyTemp;
  }

  public outToLunch(): void {
    this.msgTitle = 'Out to Lunch';
    this.msgBody = 'This track is temporarily closed due to a cataclysmic discussion on tabs vs spaces between the organizers over pizza.  We\'ll be back at ~1 PM EDT.  Rumor is there\'s fun stuff happening in the etc channel.';
  }

  public checkBackSoon(): void {
    this.msgTitle = 'Check Back Soon';
    this.msgBody = 'This track is temporarily paused due to unexpected velociraptor trouble.  Hang tight, unless anyone is unexpectedly eaten we\'ll be back soon.';
  }
}
