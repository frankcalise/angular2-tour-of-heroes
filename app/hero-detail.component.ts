declare var __moduleName: string;

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: __moduleName,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  directives: [
    MD_ICON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES
  ],
  providers: [
    MdIconRegistry
  ]
})

export class HeroDetailComponent implements OnInit, OnDestroy {

  // Declare the hero property is an input by annotating
  // with the @Input decorator
  hero: Hero;
  sub: any;

  constructor(
    private _heroService: HeroService,
    private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      // (+) converts string 'id' to a number type
      let key = 'id';
      let id = +params[key];
      this._heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
