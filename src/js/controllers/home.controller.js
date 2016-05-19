function HomeController ($scope, $http, URL) {

  initialize()
  
  function initialize() {
    $http.get(URL).then(function (res){
      $scope.getContacts = res.data;
    });
  }

}

HomeController.$inject = ['$scope', '$http', 'URL'];
export { HomeController };
