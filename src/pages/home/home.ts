import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';
import { SaveInStoragePage } from '../save-in-storage/save-in-storage';

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

}
