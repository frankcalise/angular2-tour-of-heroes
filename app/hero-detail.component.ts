import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

  // Declare the hero property is an input by annotating
  // with the @Input decorator
  @Input()
  hero: Hero;

  constructor(
    private _heroService: HeroService,
    private _route: RouteParams) {

  }

  ngOnInit() {
    let id = +this._route.get('id');
    this._heroService.getHero(id).then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}