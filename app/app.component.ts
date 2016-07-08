declare var __moduleName: string;

import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  template: `
    <md-toolbar color="primary">
      Tour of Heroes
    </md-toolbar>
    <nav>
      <button md-raised-button (click)="gotoNav('/dashboard')" [color]="isLinkActive('/dashboard')">Dashboard</button>
      <button md-raised-button (click)="gotoNav('/heroes')" [color]="isLinkActive('/heroes')">Heroes</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES
  ],
  providers: [
    HeroService
  ],
  precompile: [
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ]
})

export class AppComponent {
  sub: any;
  title = 'Tour of Heroes';
  page = '/dashboard';

  constructor(
    private _router: Router) {

  }

  gotoNav(page: string) {
    let link = [page];
    this.page = page;
    this._router.navigate(link);
  }

  isLinkActive(page: string) {
    if (this.page === page) {
      return 'accent';
    }

    return 'normal';
  }
}
