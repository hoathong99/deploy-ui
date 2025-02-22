import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
          return import('./home/home.component').then(
            (m) => m.HomeComponent
          );
        },
      },
      {
        path: 'resume',
        loadComponent: () => {
          return import('./components/resume/resume.component').then(
            (m) => m.ResumeComponent
          );
        },
      },
      {
        path: 'pos',
        loadComponent: () => {
          return import('./components/CafeSys/cafe-sys/cafe-sys.component').then(
            (m) => m.CafeSysComponent
          );
        },
      },
];
