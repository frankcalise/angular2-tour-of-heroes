declare var __moduleName: string;

import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: __moduleName,
  selector: 'my-heroes',
  directives: [
    HeroDetailComponent,
    MD_LIST_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_BUTTON_DIRECTIVES
  ],
  providers: [
    MdIconRegistry
  ],
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // parameter simultaneously defines a private
  // heroService property and identifies it as a HeroService
  // injection site - now Angular will know to supply
  // an instance of the HeroService when it creates a new AppComponent
  constructor(
    private _heroService: HeroService,
    private _router: Router) {

  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  getHeroes() {
    // Original synchronous call
    // this.heroes = this.heroService.getHeroes();

    // Call via Promise
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }
}

