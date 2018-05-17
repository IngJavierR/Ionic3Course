import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TournamentsPage } from "../pages/tournaments/tournaments";

import { HomePage } from '../pages/home/home';
import { VibrationPage } from '../pages/vibration/vibration';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { CameraPage } from '../pages/camera/camera';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { DeviceMotionPage } from '../pages/device-motion/device-motion';
import { LocalNotificationPage } from '../pages/local-notification/local-notification';
import { ManageSqlPage } from '../pages/manage-sql/manage-sql';
import { SqlStorageProvider } from '../providers/sql-storage/sql-storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav

  rootPage:any;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              sqlStorage: SqlStorageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      sqlStorage.initializeDatabase().then(() => this.rootPage = HomePage);
    });
  }

  goHome() {
    this.nav.push(HomePage);
  }

  goToTournaments() {
    this.nav.push(TournamentsPage);
  }

  goToVibration() {
    this.nav.push(VibrationPage);
  }

  goToGeolocation() {
    this.nav.push(GeolocationPage);
  }

  goToCamera() {
    this.nav.push(CameraPage);
  }

  goToBarCodeScanner() {
    this.nav.push(BarcodeScannerPage);
  }

  goToDeviceMotion() {
    this.nav.push(DeviceMotionPage);
  }

  goToLocalNotification() {
    this.nav.push(LocalNotificationPage);
  }

  goToManageSql() {
    this.nav.push(ManageSqlPage);
  }
}

