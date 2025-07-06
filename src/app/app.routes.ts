import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { ProjectsComponent } from './pages/projects';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent }
];