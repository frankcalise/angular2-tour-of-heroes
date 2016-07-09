import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import { PLATFORM_PIPES } from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { TranslateLoader, TranslateStaticLoader, TranslatePipe, TranslateService } from 'ng2-translate';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  { 
    provide: TranslateLoader,
    useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
    deps: [Http]
  },
  // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
  TranslateService,
  APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  {provide: PLATFORM_PIPES, useValue: TranslatePipe, multi: true}
]);
