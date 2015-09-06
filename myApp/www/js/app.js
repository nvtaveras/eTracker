(function(){

var app = angular.module('starter', ['ionic']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider.state('list', {
    url:         '/list',
    controller:  'FirstCtrl',
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

var transactions = [
  {
    id:          '0',
    title:       'My first transaction',
    description: 'Bacon ipsum dolor amet pancetta biltong jerky pastrami filet mignon.',
    amount:      23495.12
  },
  {
    id:          '1',
    title:       'My second transaction',
    description: 'Bacon ipsum dolor amet pancetta biltong jerky pastrami filet mignon.',
    amount:      123.45
  },
  {
    id:          '2',
    title:       'My third transaction',
    description: 'Bacon ipsum dolor amet pancetta biltong jerky pastrami filet mignon.',
    amount:      123456789.99
  }
];

var get = function(id){
  for(var i = 0; i < transactions.length; ++i){
    if(transactions[i].id == id){
      return transactions[i];
    }
  }
};

var update = function(transaction){
  for(var i = 0; i < transactions.length; ++i){
    if(transactions[i].id == transaction.id){
      transactions[i] = transaction;
      return ;
    }
  }
};

var add = function(transaction){
  transactions.push(transaction);
};

app.controller('FirstCtrl', ['$scope', '$log', function($scope, $log){
  $scope.transactions = transactions;
  $scope.fn = function(transaction){
  };
}]);

app.controller('EditCtrl', ['$scope', '$state', function($scope, $state){
  var id = $state.params.id;
  $scope.transaction = get(id);
  $scope.save = function(){
    update($scope.transaction);
    $state.go('list');
  };
}]);

app.controller('AddCtrl', ['$scope', '$state', function($scope, $state){
  $scope.transaction = {
    id:          transactions.length,
    title:       '',
    description: '',
    amount:      ''
  };
  $scope.save = function(){
    add($scope.transaction);
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

