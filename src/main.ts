import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'firebase/analytics'

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
