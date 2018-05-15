import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ElipeApiProvider } from '../../providers/elipe-api/elipe-api';
import { GamePage } from '../game/game';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  public dateFilter: string;
  public data: any = {};
  public games: any[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public eliteApi: ElipeApiProvider) {
    this.data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
    this.games = this.data.currentTourney.games
        .filter(g => g.team1Id === this.data.team.id || g.team2Id === this.data.team.id)
        .map(g => {
          let isTeam1 = (g.team1Id === this.data.team.id);
          let opponentName = isTeam1 ? g.team2 : g.team1;
          let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
          return {
            gameId: g.id,
            opponent: opponentName,
            time: Date.parse(g.time),
            location: g.location,
            locationUrl: g.locationUrl,
            scoreDisplay: scoreDisplay,
            homeAway: (isTeam1 ? 'vs.' : 'at')
          };
        });
  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if(team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? 'W: ' : 'L: ';
      return winIndicator +  teamScore + '-' + opponentScore;
    }
  }

  gameClicked($event, game) {
     let sourceGame = this.data.currentTourney.games.find(g => g.id === game.gameId);
     this.navCtrl.parent.parent.push(GamePage, {
       team: sourceGame,
       currentTourney: this.data.currentTourney
     });
  }
  /*goHome() {
    //this.navCtrl.popToRoot();
    console.log(this.navCtrl.parent);
    this.navCtrl.parent.parent.popToRoot();
  }*/

}
