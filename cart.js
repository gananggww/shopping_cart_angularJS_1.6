angular.module('cart', [])
  .controller('ListController', function() {
    let listItems = this
    listItems.list = [{
      name: 'vas bunga',
      qty: 2
    }, {
      name: 'kursi santai',
      qty: 10
    }]
  })
