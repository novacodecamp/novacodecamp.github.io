import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerTrackSpeakersComponent } from './per-track-speakers/per-track-speakers.component';
import { TwitterCardsComponent } from './twitter-cards/twitter-cards.component';
import { HomeComponent } from './home/home.component';
import { SpeakerComponentComponent } from './speaker/speaker.component';
import { TwitterUsernameComponent } from './twitter-username/twitter-username.component';

@NgModule({
  declarations: [
    AppComponent,
    PerTrackSpeakersComponent,
    TwitterCardsComponent,
    HomeComponent,
    SpeakerComponentComponent,
    TwitterUsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
