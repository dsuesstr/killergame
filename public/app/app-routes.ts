///<reference path='../typings/tsd.d.ts' />
module Killergame {
  'use strict';

  angular
    .module('Killergame')
    .config(config);

  function config($routeProvider: ng.route.IRouteProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }
}
