import { Injectable } from 'angular2/core';
import { HEROES } from './mock-heroes';

// Decorator that emits metadata about service
// data that Angular may need to inject other dependencies
// into this service
@Injectable()
export class HeroService {
  getHeroes() {
    // return HEROES; // This is a synchronous call

    // Now can async
    return Promise.resolve(HEROES);
  }

  getHero(id: number) {
    return this.getHeroes()
               .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}