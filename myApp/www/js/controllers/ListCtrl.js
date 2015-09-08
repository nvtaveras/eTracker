(function(){
'use strict';

var app = angular.module('eTracker');

app.controller('ListCtrl', ['$scope', 'TransactionsService', function($scope, TransactionsService){
  $scope.transactions = TransactionsService.getAll();
  $scope.delete = function(index){
    TransactionsService.delete(index);
  };
}]);

})();
