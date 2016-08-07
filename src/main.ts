import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment } from './app/';
import { TodosService, LocalStorageService} from './app/services/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent,
  [
    disableDeprecatedForms(),
    provideForms(),
    TodosService,
    LocalStorageService
  ]
)
.catch((err: any) => {
  console.log(err);
});
