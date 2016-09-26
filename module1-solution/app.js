(function () {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('FirstCtrl', FirstCtrl);

	FirstCtrl.$inject = ['$scope'];
	function FirstCtrl($scope) {
    $scope.content = "";
    $scope.textbox = "";
    $scope.tooMuch = function() {
      let textBox = $scope.textbox;
      if (textBox === "") {
        $scope.content = "Please enter data first";
      }
      else if (textBox.split(",").length <= 3) {
        $scope.content = "Enjoy!";
      }
      else {
        $scope.content = "Too much!";
      }
    };
	}
})();
