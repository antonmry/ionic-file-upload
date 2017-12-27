import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
  }

  doRequest() {
    this.films = this.httpClient.get('https://swapi.co/api/films');
    console.log('my data: ', this.films);
  }

  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }
}
