import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import {AppConfig} from './config/app.config';

const routes: Routes = [
  { path: '', redirectTo: AppConfig.routes.index, pathMatch: 'full' },
  { path: AppConfig.routes.heroes, component: HeroesComponent },
  { path: AppConfig.routes.dashboard, component: DashboardComponent },
  { path: AppConfig.routes.heroDetail, component: HeroDetailComponent },
  { path: AppConfig.routes.index , component: IndexComponent },
  { path: AppConfig.routes.login, component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

