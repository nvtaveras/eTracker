(function(){
'use strict';

var app = angular.module('eTracker');

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

})();
