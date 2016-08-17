'use strict';

export class NavbarComponent {
  menu = [{
    'title': 'Home',
    'link': '/'
  }];
  $location;
  isCollapsed = true;

  constructor($location) {
    'ngInject';

    this.$location = $location;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
