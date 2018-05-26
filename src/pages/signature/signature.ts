import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signString: string;
  signaturePadOptions: Object = {
    'minWidth': 3,
    'canvasWidth': 350,
    'canvasHeight': 300
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit() {
    this.signaturePad.clear();
  }

  drawComplete() {
    this.signString = this.signaturePad.toDataURL();
    console.log(this.signString);
  }
  
  drawStart() {
    console.log('begin drawing');
  }

  drawClear() {
    this.signaturePad.clear();
  }

}
