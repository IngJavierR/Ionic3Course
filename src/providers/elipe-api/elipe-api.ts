import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ElipeApiProvider {
  private baseUrl = 'https://elite-schedule-app-i2-e1e13.firebaseio.com';

  constructor(public http: HttpClient) {
  }

  getTournaments() {
    return this.http
              .get(`${this.baseUrl}/tournaments.json`)
              .catch(this.handleError);
  }

  getTournamentData(tourneyId) {
    return this.http
              .get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
              .catch(this.handleError);
  }

  handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }

}
