import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  public game: any = {};
  public data: any = {};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
    this.data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.game = this.data.team;
  }

  teamTapped(teamId) {
    let team = this.data.currentTourney.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, {
      team: team,
      currentTourney: this.data.currentTourney
    });
  }

}
