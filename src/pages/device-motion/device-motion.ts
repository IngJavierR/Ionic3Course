import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-device-motion',
  templateUrl: 'device-motion.html',
})
export class DeviceMotionPage {

  subscription: Subscription
  data: any;
  constructor(private deviceMotion: DeviceMotion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceMotionPage');
  }

  startWatching() {
    let options: DeviceMotionAccelerometerOptions = {
      frequency: 500
    }
    this.subscription = this.deviceMotion
                        .watchAcceleration(options)
                        .subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.data = acceleration;
    });
  }

  stopWatching() {
    this.subscription.unsubscribe();
  }

}
