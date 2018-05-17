import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {

  results: any;
  constructor(private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.results = barcodeData;
     }).catch(err => {
         console.log('Error', err);
     });
  }

  reset() {
    this.results = null;
  }

  lookup() {
    window.open(`http://www.upcindex.com/${this.results.text}`, '_system');
  }

}
