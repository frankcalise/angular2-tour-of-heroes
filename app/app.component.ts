import { Component } from 'angular2/core';

export class Hero {
  id: number,
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Genji' },
  { id: 12, name: 'McCree' },
  { id: 13, name: 'Pharah' },
  { id: 14, name: 'Reaper' },
  { id: 15, name: 'Soldier: 76' },
  { id: 16, name: 'Tracer' },
  { id: 17, name: 'Bastion' },
  { id: 18, name: 'Hanzo' },
  { id: 19, name: 'Junkrat' },
  { id: 20, name: 'Mei' },
  { id: 21, name: 'Torbjorn' },
  { id: 22, name: 'Widowmaker' },
  { id: 23, name: 'D.Va' },
  { id: 24, name: 'Reinhardt' },
  { id: 25, name: 'Roadhog' },
  { id: 26, name: 'Torbjorn' },
  { id: 27, name: 'Winston' },
  { id: 28, name: 'Zarya' },
  { id: 29, name: 'Lucio' },
  { id: 30, name: 'Mercy' },
  { id: 31, name: 'Symmetra' },
  { id: 32, name: 'Zenyatta' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Overwatch Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes">
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
  `]
})

export class AppComponent {
  heroes = HEROES;
  title = 'Tour of Heroes';
}

