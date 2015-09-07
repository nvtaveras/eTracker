(function(){

var app = angular.module('eTracker');

app.factory('TransactionsService', [function(){

  var store = window.localStorage;
  var transactions = angular.fromJson(store['transactions']) || [];
  var persist = function(){
    store['transactions'] = angular.toJson(transactions);
  };
  return {
    add : function(transaction){
      transaction.id = transactions.length;
      transactions.push(transaction);
      persist();
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
          persist();
          return ;
        }
      }
    },
    delete : function(id){
      transactions.splice(id, 1);
      persist();
    }
  }
}]);

})();