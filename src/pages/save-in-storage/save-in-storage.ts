import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserSettingsProvider } from '../../providers/user-settings/user-settings';

@Component({
  selector: 'page-save-in-storage',
  templateUrl: 'save-in-storage.html',
})
export class SaveInStoragePage {

  public queryText: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userSettings: UserSettingsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaveInStoragePage');

    this.userSettings.setFavoriteTeam('1', {nombre: 'Javier', lastName: 'Rodriguez'});

    this.userSettings.getFavoriteTeam('1').then(val => console.log('Val: ', val));

  }

  refreshAll(refresher) {
    refresher.complete();
  }

  updateTeams() {
    console.log('Buscar: ', this.queryText.toLocaleLowerCase());
  }
 
}
