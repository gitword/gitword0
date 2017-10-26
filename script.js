angular.module("mainModule", [])
  .controller("mainController", function ($scope)
  {
      	
	color1 = "red";
	color2= "green";
	$scope.onClickResult1 = color1;
	$scope.onClickResult2 = color1;
	$scope.onClickResult3 = color1;	
	
	$scope.circleArray = [color1,color1,color1];
	        
	
	$scope.onClick = function (item) {	  
	 console.log(item);	
	 resetcolor();
	 $scope.circleArray[item-1] = color2;
	 //console.log($scope.circleArray[0]);
	 //console.log($scope.circleArray[1]);
	 //console.log($scope.circleArray[2]);	
    };
	
		
	function resetcolor()
	{
	   $scope.circleArray.forEach(function(item, i, circleArray) {
         $scope.circleArray[i] = color1;
       });
	}
	
  });