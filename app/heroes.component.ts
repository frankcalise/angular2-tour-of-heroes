import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
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
    //this.heroes = this.heroService.getHeroes();

    // Call via Promise
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }
}

