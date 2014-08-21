function changeSelect(formV,toV){
    document.getElementById(toV).innerHTML = formV.options[formV.selectedIndex].text;
}

var mainCtrl = function ($scope,$filter) {
	$scope.dataseach = {itemname : 'Enter Item',columnvalue:'0',searchvalue:''}

    $scope.lists =  [
			{itemname: 'France'},
			{itemname: 'United Kingdom'},
		 ];

    $scope.listsRight =  [
			{itemname: 'RedColor'},
			{itemname: 'BlueColor'},
		 ];

	$scope.x = "";
	$scope.searchvalue = "";

	$scope.itemnameClick = function(searchValue){
		if(searchValue=="Enter Item"){
			$scope.dataseach.itemname = "";
		}
	}

	$scope.itemnameBlur = function(searchValue){
		if(searchValue==""){
			$scope.dataseach.itemname = "Enter Item";
		}
	}	

    $scope.remove = function(index,listPos){   
		(listPos==1)?$scope.lists.splice(index,1):$scope.listsRight.splice(index,1);
    }  ;

	$scope.insert = function()
	{
	  if($scope.x==""){
		  return;
	  }
	  else if($scope.x=="1"){
			$scope.lists.splice($scope.lists.length, 0, {itemname: $scope.dataseach.itemname});
	  }
	  else if($scope.x=="2"){
			$scope.listsRight.splice($scope.listsRight.length, 0, {itemname: $scope.dataseach.itemname});
	  }
	};
	
	$scope.afterInsert = function(){
			//if(parseInt($("#rightListContentright").css("height"))> parseInt($("#rightListContentleft").css("height")))  
			//	$("#rightListContentleft").css("height",$("#rightListContentright").css("height"));
			//if(parseInt($("#rightListContentleft").css("height"))> parseInt($("#rightListContentright").css("height")))  
			//	$("#rightListContentright").css("height",$("#rightListContentleft").css("height"));
		
	}

	

};