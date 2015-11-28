'use strict';

let app = angular.module('swapi-custom-directive', []);

app.directive("planetsDropdown", function() {
  return {
    templateUrl: (elem, attr) => `partials/planets.html`,
  }
});

