import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/all-custom-forms',
        name: 'All forms',
        iconClass: 'fas fa-border-all',
        order: 2,
        layout: eLayoutType.application,
        // requiredPolicy: 'Admin'
      },
      {
        path: '/create-custom-form',
        name: 'Create form',
        iconClass: 'fas fa-list',
        order: 3,
        layout: eLayoutType.application,
        requiredPolicy: 'Admin'
      },
      {
        path: '/invite-user',
        name: 'Invite user',
        iconClass: 'fas fa-user',
        order: 4,
        layout: eLayoutType.application,
        requiredPolicy: 'Admin'
      }
    ]);
  };
}
