'use strict';

app.controller('PlanetsCtrl', function($scope, $http) {
  $http.get(`http://swapi.co/api/planets/?page=1&format=json`)
    .then(res => {
      $scope.planets = res.data.results.map(planet => {
        planet.residents = planet.residents.map(resident => {
          var resident = { url: resident };
          resident.id = resident.url.match(/\d+/)[0];
          return resident;
        });
        return planet;
      });  
    })
    .catch(error => {
      $scope.error = true;
    });
});