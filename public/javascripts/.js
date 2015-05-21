var bowlingApp = angular.module('seafordBowlingApp', []);

bowlingApp.value('clientId', 'a12345654321x');

bowlingApp.controller('DemoController', ['clientId', function DemoController(clientId) {
  this.clientId = clientId;
}]);