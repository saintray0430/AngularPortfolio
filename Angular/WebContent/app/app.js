var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/',
    {
        templateUrl:'app/partials/default.html'
    })
    .when('/About',
    {
        templateUrl: 'app/partials/about.html'
    })
         .when('/Contact',
    {
        templateUrl: 'app/partials/contact.html'
    })
            .when('/Videos',
    {
        templateUrl: 'app/partials/videos.html',
        controller: 'VideosController'
    })
    .otherwise({redirectTo:'/'});
});