import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BotRetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bot-retail',
  templateUrl: 'bot-retail.html',
})
export class BotRetailPage {

  secret: string = '_Ad0N5JFws0.cwA.nUI.XBq390GkU_Jh3iezSKz7S8ZMjJ9ns9KP5MAwfdBUahY'; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotRetailPage');
  }

}
