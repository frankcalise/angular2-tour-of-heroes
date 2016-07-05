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
}