import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

/*
  Generated class for the UserSettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserSettingsProvider {

  constructor(private storage: Storage) {
    console.log('Hello UserSettingsProvider Provider');
  }

  setFavoriteTeam(teamId, tournament) {
    let item = { teamId : teamId, tournament: tournament };
    this.storage.set(teamId, JSON.stringify(item));
  }

  delFavoriteTeam(teamId) {
    this.storage.remove(teamId);
  }

  getFavoriteTeam(teamId): Promise<any> {
    return this.storage.get(teamId);
  }

}
