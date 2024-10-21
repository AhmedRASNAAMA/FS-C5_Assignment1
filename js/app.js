(function(){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('lunchCheckController',lunchCheckController);
    lunchCheckController.$inject= ['$scope'];
    function lunchCheckController($scope) {

        $scope.checkMe = function(){

            if ($scope.lunchMenu) {
                var Number = $scope.lunchMenu.split(',').length;

                if (Number <= 3) {
                        $scope.outputText = "Enjoy!";
                        } else {
                        $scope.outputText = "Too much!";
                        }
                        document.querySelector("#outputText").style.color = "green";  //BONUS (OPTIONAL)
                        document.querySelector("#lunch-menu").style.borderColor = "green";  //BONUS (OPTIONAL)
                        
            } else {
                $scope.outputText = "Please enter data first";
                document.querySelector("#outputText").style.color = "red"; //BONUS (OPTIONAL)
                document.querySelector("#lunch-menu").style.borderColor = "red";  //BONUS (OPTIONAL)
            }
        }
    }
})();