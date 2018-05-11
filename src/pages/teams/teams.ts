import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { ElipeApiProvider } from '../../providers/elipe-api/elipe-api';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams: any[] = [];
  public currentTourney: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public eliteApi: ElipeApiProvider) {
      let selectedTourney = this.navParams.data;
      this.eliteApi
          .getTournamentData(selectedTourney.id)
          .subscribe(x => {
            this.teams = x.teams;
            this.currentTourney = x;
          });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, {
      team: team,
      currentTourney: this.currentTourney
    });
  }

}
