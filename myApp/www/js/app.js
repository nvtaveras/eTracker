(function(){

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

app.controller('ListCtrl', ['$scope', 'TransactionsService', function($scope, TransactionsService){
  $scope.transactions = TransactionsService.getAll();
  $scope.delete = function(index){
    TransactionsService.delete(index);
  };
}]);

app.controller('EditCtrl', ['$scope', '$state', 'TransactionsService', function($scope, $state, TransactionsService){
  var id = $state.params.id;
  $scope.transaction = TransactionsService.get(id);
  $scope.save = function(){
    TransactionsService.update($scope.transaction);
    $state.go('list');
  };
}]);

app.controller('AddCtrl', ['$scope', '$state', 'TransactionsService', function($scope, $state, TransactionsService){
  $scope.transaction = {
    id:          '',
    title:       '',
    description: '',
    amount:      ''
  };
  $scope.save = function(){
    TransactionsService.add($scope.transaction);
    $state.go('list');
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

