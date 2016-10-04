(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	
	function ToBuyController(ShoppingListCheckOffService) {
		let buyCtrl = this;
		buyCtrl.toBuy = ShoppingListCheckOffService.buyList();
		buyCtrl.removeBought = function(index) {
			ShoppingListCheckOffService.removeBought(index);
		};
		buyCtrl.toBuyEmpty = function() {
			return buyCtrl.toBuy.length === 0;
		}
	};

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		let boughtCtrl = this;
		boughtCtrl.bought = ShoppingListCheckOffService.boughtList();
		boughtCtrl.boughtEmpty = function() {
			return boughtCtrl.bought.length === 0;
		}
	};

	function ShoppingListCheckOffService() {
		let toBuy = [{ name: 'Water bottles', quantity: 10 },
					 { name: 'Foody', quantity: 35 },
					 { name: 'Food', quantity: 2 },
					 { name: 'Plane tickets', quantity: 2 },
					 { name: 'Gold coins', quantity: 42 }];
		let bought = [];

		this.buyList = function() {
			return toBuy;
		}

		this.removeBought = function(index) {
			bought.push(toBuy[index]);
			toBuy.splice(index, 1);
		}

		this.boughtList = function() {
			return bought;
		}
	};
})();