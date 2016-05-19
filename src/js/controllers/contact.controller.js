function ContactController ($scope, $http, URL, $stateParams, $state) {

  initialize()
  function initialize () {
    $http.get(URL + $stateParams.contactID).then(function (res){
      $scope.singleContact = res.data
    });
  }
    $scope.deleteContact = function (contactID) {
      $http.delete(URL + contactID).then(function (res){
        $state.go('home')
      });
  }
}
ContactController.$inject = ['$scope', '$http', 'URL', '$stateParams', '$state'];
export { ContactController };
