(function(){
'use strict';

var app = angular.module('eTracker');

app.controller('AddCtrl', ['$scope', '$state', 'TransactionsService', function($scope, $state, TransactionsService){
  $scope.categories = TransactionsService.getCategories();
  $scope.transaction = {
    id:          '',
    type:        '1',
    category:    $scope.categories[0],
    title:       '',
    description: '',
    amount:      ''
  };
  $scope.save = function(){
    console.log($scope.transaction);
    TransactionsService.add($scope.transaction);
    $state.go('list');
  };
}]);

})();
