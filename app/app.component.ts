import { Component } from 'angular2/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from 'angular2/core';

@Component({
  selector: 'my-app',
  directives: [HeroDetailComponent],
  template: `
    <h1>{{title}}</h1>
    <h2>Overwatch Heroes</h2>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          (click)="onSelect(hero)"
          [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  heroes: Hero[];
  title = 'Tour of Heroes';
  selectedHero: Hero;

  // parameter simultaneously defines a private
  // heroService property and identifies it as a HeroService
  // injection site - now Angular will know to supply
  // an instance of the HeroService when it creates a new AppComponent
  constructor(private heroService: HeroService) {

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
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}

