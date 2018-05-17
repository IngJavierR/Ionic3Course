import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  imgSrc: any;
  constructor(private camera: Camera) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(imageData => {
      this.imgSrc = 'data:image/jpeg;base64,' + imageData;
    });

  }

}
