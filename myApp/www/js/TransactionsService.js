(function(){

var app = angular.module('eTracker');

app.factory('TransactionsService', [function(){
  var transactions = [
  ];
  return {
    add : function(transaction){
      transaction.id = transactions.length;
      transactions.push(transaction);
    },
    getAll : function(){
      return transactions;
    },
    get : function(id){
      for(var i = 0; i < transactions.length; ++i){
        if(transactions[i].id == id){
          return transactions[i];
        }
      }
    },
    update : function(transaction){
      for(var i = 0; i < transactions.length; ++i){
        if(transactions[i].id == transaction.id){
          transactions[i] = transaction;
          return ;
        }
      }
    },
    delete : function(id){
      transactions.splice(id, 1);
    }
  }
}]);

})();