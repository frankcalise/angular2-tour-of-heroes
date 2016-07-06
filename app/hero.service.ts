import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';

// Decorator that emits metadata about service
// data that Angular may need to inject other dependencies
// into this service
@Injectable()
export class HeroService {
  hero: Hero;

  private heroesUrl = 'http://frankcalise.com/angular2/heroes.php';

  constructor(private _http: Http) { }

  getHeroes() {
    // return HEROES; // This is a synchronous call

    // Now can async
    return this._http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  getHero(id: number) {

    return this.getHeroes()
               .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  private handleError(error: any) {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }


}