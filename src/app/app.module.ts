import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule,
          MatButtonModule,
          MatListModule,
          MatIconModule,
          MatInputModule,
          MatProgressBarModule } from '@angular/material';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from "@ionic/storage";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Vibration } from "@ionic-native/vibration";
import { Geolocation } from "@ionic-native/geolocation";
import { Camera } from "@ionic-native/camera";
import { DeviceMotion } from "@ionic-native/device-motion";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { SQLite } from "@ionic-native/sqlite";
import { AgmCoreModule } from "@agm/core";
import { SignaturePadModule } from 'angular2-signaturepad';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamsPage } from '../pages/teams/teams';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { SaveInStoragePage } from "../pages/save-in-storage/save-in-storage";

import { ChatBotComponent } from "../components/chat-bot/chat-bot";

import { ElipeApiProvider } from '../providers/elipe-api/elipe-api';
import { UserSettingsProvider } from '../providers/user-settings/user-settings';
import { MapPage } from '../pages/map/map';
import { VibrationPage } from '../pages/vibration/vibration';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { CameraPage } from '../pages/camera/camera';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';
import { LocalNotificationPage } from '../pages/local-notification/local-notification';
import { SqlStorageProvider } from '../providers/sql-storage/sql-storage';
import { ManageSqlPage } from '../pages/manage-sql/manage-sql';
import { BotPage } from '../pages/bot/bot';
import { SignaturePage } from '../pages/signature/signature';
import { BotRetailPage } from '../pages/bot-retail/bot-retail';

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
    TournamentsPage,
    StandingsPage,
    TeamHomePage,
    SaveInStoragePage,
    MapPage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    BarcodeScannerPage,
    DeviceMotionPage,
    LocalNotificationPage,
    ManageSqlPage,
    BotPage,
    ChatBotComponent,
    SignaturePage,
    BotRetailPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MATERIAL_COMPONENTS, 
    SignaturePadModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCzQpA3BWcHgYz3-1bBmPF3y8K6CdeIWYw'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage,
    SaveInStoragePage,
    MapPage,
    VibrationPage,
    GeolocationPage,
    CameraPage,
    BarcodeScannerPage,
    DeviceMotionPage,
    LocalNotificationPage,
    ManageSqlPage,
    BotPage,
    SignaturePage,
    BotRetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ElipeApiProvider,
    UserSettingsProvider,
    Vibration,
    Geolocation,
    Camera,
    BarcodeScanner,
    DeviceMotion,
    LocalNotifications,
    SQLite,
    SqlStorageProvider
  ]
})
export class AppModule {}
