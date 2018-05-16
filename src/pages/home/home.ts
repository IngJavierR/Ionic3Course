import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { SaveInStoragePage } from '../save-in-storage/save-in-storage';
import { MapPage } from '../map/map';

declare var window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }

  goToExperiment() {
    this.navCtrl.push(SaveInStoragePage);
  }

  goToMap() {
    this.navCtrl.push(MapPage);
  }

  goToDirections() {
    let location = {latitude: 19.451212, longitude: -99.217481};
    window.location = `geo:${location.latitude},${location.longitude};u=35`;
  }

}
