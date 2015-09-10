(function(){
'use strict';

var app = angular.module('eTracker');

app.controller('EditCtrl', ['$scope', '$state', 'TransactionsService', function($scope, $state, TransactionsService){
  var id = $state.params.id;
  $scope.transaction = TransactionsService.get(id);
  $scope.categories = TransactionsService.getCategories();
  $scope.save = function(){
    TransactionsService.update($scope.transaction);
    $state.go('list');
  };
}]);

})();
