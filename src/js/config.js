function Config ($stateProvider, $urlRouterProvider) {
  // Using this allows the url to transfer to /#/ if it isn't recognized
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddContactController'
    })
    .state('contacts', {
      url: '/contacts',
      templateUrl: '',
      controller: ''
    })
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })
  ;
}
Config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { Config };
