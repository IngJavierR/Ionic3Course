import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,
          MatButtonModule,
          MatListModule,
          MatIconModule,
          MatInputModule,
          MatProgressBarModule } from '@angular/material';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamsPage } from '../pages/teams/teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';

export const MATERIAL_COMPONENTS = [
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
