import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(public vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

  vibrate() {
    this.vibration.vibrate(1000);
  }

}
