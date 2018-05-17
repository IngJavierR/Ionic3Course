import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  location: any = {lat: 0, lng: 0};
  constructor(private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location.lat = resp.coords.latitude;
      this.location.lng = resp.coords.longitude;
    });
  };

}
