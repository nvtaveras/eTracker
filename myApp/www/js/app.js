(function(){
  var app = angular.module('starter', ['ionic']);

  app.config(['$stateProvider', function($stateProvider){

  }]);

  app.controller('FirstCtrl', ['$scope', '$log', function($scope, $log){
    $scope.transactions = [
      {
        'title' : 'Pizza at Laurus kajsd kasdkasjdk jdkj askdj aksdjk askdj asjkd',
        'amount' : 23495.12
      },
      {
        'title' : 'My second transaction',
        'amount' : 123.45,
      },
      {
        'title' : 'My third and awesome transaction',
        'amount' : 123456789.99
      }
    ];
    $scope.fn = function(transaction){
      $log.log(transaction);
    };
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

