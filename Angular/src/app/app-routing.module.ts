import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home-component.component';
import { PerTrackSpeakersComponent } from './per-track-speakers/per-track-speakers.component';
import { TwitterCardsComponent } from './twitter-cards/twitter-cards.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'per-track-speakers',
    component: PerTrackSpeakersComponent,
  },
  {
    path: 'twitter-cards',
    component: TwitterCardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
