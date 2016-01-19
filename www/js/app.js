var myApp = angular.module('starter', ['ionic']);

myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'templates/list.html'
  });

  $stateProvider.state('edit', {
    url: '/edit',
    templateUrl: 'templates/edit.html'
  });

  $urlRouterProvider.otherwise('/list');
});

myApp.controller('ListCtrl', function($scope) {
  $scope.notes = [
    {
      title: 'First note',
      description: 'This is my first note',
    },
    {
      title: 'Second note',
      description: 'This is my second note',
    }
  ];
});

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
