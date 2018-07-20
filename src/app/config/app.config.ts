import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    index: 'index',
    login: 'login',
    heroes: 'heroes',
    heroDetail: 'detail/:id',
    dashboard: 'dashboard',
    error404: '404'
  },
  endpoints: {
    heroes: 'https://nodejs-example-app.herokuapp.com/heroes'
  },
  index: {
    initData: 'http://localhost:8002/test'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Ismaestro/angular5-example-app'
};
