declare var __moduleName: string;

import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { FORM_DIRECTIVES } from '@angular/forms';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';
import {  MdUniqueSelectionDispatcher } from '@angular2-material/core/coordination/unique-selection-dispatcher';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  providers: [
    HeroService,
    MdUniqueSelectionDispatcher
  ],
  precompile: [
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ]
})

export class AppComponent {
  sub: any;
  page = '/dashboard';
  userLang: string = 'en';

  constructor(
    private _router: Router,
    private _translate: TranslateService) {
      this.userLang = navigator.language.split('-')[0]; // use navigator lang if available
      this.setLanguage(this.userLang);

      // default language to fallback when translation isn't found
      // in current language
      _translate.setDefaultLang('en');

      // language to use
      _translate.use(this.userLang);
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

  languageSelected(value: string) {
    this.setLanguage(value);
  }

  private setLanguage(newLang: string) {
    if (newLang !== this.userLang) {
      this.userLang = /(en|it|es)/gi.test(newLang) ? newLang : 'en';
      this._translate.use(this.userLang);
    }
  }
}
