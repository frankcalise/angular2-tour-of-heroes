import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  directives: [
    MD_ICON_DIRECTIVES,
    MD_INPUT_DIRECTIVES
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
      let id = +params['id'];
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