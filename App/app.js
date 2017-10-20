/**
 * Created by wangyaping on 2017/10/19.
 */
var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/app", {
            templateUrl:"App/View/app.html"
        })
        .when("/app1", {
            templateUrl:"App/View/app1.html"
        })
})
