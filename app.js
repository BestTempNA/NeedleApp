var app = angular.module('app', []);
app.controller('appController', function($scope){

    // Temporary DB
    $scope.users = [
        {id:1, name:"Jean-Baptiste Emanuel Zorg", email:"jbez@zorg.com", dateAdded:"2001/01/01"},
        {id:2, name:"Corbin Dallas", email:"corbinwins@gmail.com", dateAdded:"2015/11/05"},
        {id:3, name:"Handsome Jack", email:"ceo@hyperion.com", dateAdded:"2012/07/17"},
        {id:4, name:"Hal Jordan", email:"earth@greenlantern.com", dateAdded:"2007/09/02"}
    ];

    $scope.getDate = function(){
        $scope.date = new Date();
        $scope.yyyy = $scope.date.getFullYear();
        $scope.mm = $scope.date.getMonth() + 1;
        $scope.dd = $scope.date.getDate();     

        if($scope.dd < 10) $scope.dd = '0' + $scope.dd;
        if($scope.mm < 10) $scope.mm = '0' + $scope.mm;

        return $scope.yyyy + '/' + $scope.mm + '/' + $scope.dd;
    }

    $scope.getTotalUsers = function(){
        return $scope.users.length
    }

    $scope.addUser = function(isValid){
        if(isValid) $scope.users.push({id:$scope.getTotalUsers() + 1, name:$scope.name, email:$scope.email, dateAdded:$scope.getDate()});
    }
});