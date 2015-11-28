'use strict';

let app = angular.module('swapi-custom-directive', []);

app.directive("swapiPlanetsSelector", function() {
  return {
    templateUrl: (elem, attr) => `partials/planets.html`,
  }
});

