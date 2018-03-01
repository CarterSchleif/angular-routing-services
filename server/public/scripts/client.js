const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController as hc'
  }).when('/logIn', {
    templateUrl: 'views/logIn.html',
    controller: 'LogInController as lc'
  }).otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function() {
    console.log('HomeController created.');
    let self = this;

    self.message = 'This is my Home Page';
  });

  app.controller('LogInController', ['TestingService', function(TestingService) {
    console.log('LogInController created.');
    let self = this;
    self.message = TestingService.message;
  }]);


  app.service('TestingService', function() {
    console.log('TestingService created.');
    let self = this;
   
    self.message = { message: 'This will be my Log In Page' };
  });