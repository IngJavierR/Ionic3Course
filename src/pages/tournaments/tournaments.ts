import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { ElipeApiProvider } from "../../providers/elipe-api/elipe-api";

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  public tournaments: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public eliteApi: ElipeApiProvider,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    //console.log('## lifecycle ## ionViewDidLoad');
    let loader = this.loadingController.create({
      content: 'Getting tournaments',
      spinner: 'dots'
    });

    loader.present().then((() => {
      this.eliteApi
      .getTournaments()
      .subscribe(x => {
        this.tournaments = x;
        loader.dismiss();
      })
    }));
  }

  /*ionViewWillEnter() {
    console.log('## lifecycle ## ionViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('## lifecycle ## ionViewWillLeave');
  }

  ionViewWillUnload() {
    console.log('## lifecycle ## ionViewWillUnload');
  }*/

  itemTapped($event, tourney) {
    this.navCtrl.push(TeamsPage, tourney);
  }

}
