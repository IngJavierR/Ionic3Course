import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var window: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  public map: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    //19.451212, -99.217481
    this.map = {
      lat: 19.451212,
      lng: -99.217481,
      zoom: 12,
      markerLabel: 'Axity'
    }
  }

  goToDirections() {
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`;
  }

}
