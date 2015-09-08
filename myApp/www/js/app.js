(function(){
'use strict';

var app = angular.module('eTracker', ['ionic']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider.state('list', {
    url:         '/list',
    controller:  'ListCtrl',
    templateUrl: 'templates/list.html'
  });

  $stateProvider.state('edit', {
    url:         '/edit/:id',
    controller:  'EditCtrl',
    templateUrl: 'templates/edit.html'
  });

  $stateProvider.state('add', {
    url:         '/add',
    controller:  'AddCtrl',
    templateUrl: 'templates/edit.html'
  });

  $urlRouterProvider.otherwise('/list');
}]);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

})();

