/**
 * Created by wangyaping on 2017/10/19.
 */
app.controller('serviceController', ["$scope","carFactory",function ($scope,carFactory) {
    $scope.objs = "";
    carFactory.getData("get","./Data/data.json").then(function (res) {
        $scope.objs = res;
    })
}])