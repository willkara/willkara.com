import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import API from '@aws-amplify/api';
import aws_exports from './aws-exports';

if (environment.production) {
  enableProdMode();
}

API.configure(aws_exports);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
