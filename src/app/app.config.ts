import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
     providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          cssLayer: {
              name: 'primeng',
              order: 'primeng, custom-styles' // primeng first, then custom styles override
          },
          darkModeSelector: '.dark-mode' , // to enable dark mode in primeng
        }
      },      
    }),
  ]
};
