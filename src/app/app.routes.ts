// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
];
