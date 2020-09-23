import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TracksComponent as TracksComponent } from './tracks/tracks.component';
import { SpeakerComponentComponent as SpeakerComponent } from './speaker/speaker.component';
import { TwitterCardsComponent } from './twitter-cards/twitter-cards.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tracks',
    component: TracksComponent,
  },
  {
    path: 'tracks/:id?',
    component: TracksComponent,
  },
  {
    path: 'twitter-cards',
    component: TwitterCardsComponent,
  },
  {
    path: 'speakers/:id',
    component: SpeakerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}