import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-local-notification',
  templateUrl: 'local-notification.html',
})
export class LocalNotificationPage {

  results: string;
  constructor(private localNotifications: LocalNotifications) {
    this.localNotifications.on('click').subscribe(notification => {
      this.results = notification.data.id;
      alert(notification.data.name);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalNotificationPage');
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Cool notification',
      text: 'this is my cool notification',
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: { 
        id: 21,
        name: 'Cool notification #21' }
    });
  }
}
