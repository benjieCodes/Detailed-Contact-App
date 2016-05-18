function AddContactController ($scope, $http, URL, $state) {

  $scope.addContact = function (contactObject) {
    $http.post(URL, contactObject).then( function (res){
      alert('Contact Added!')
      $state.go('home')
    });
  }

}
AddContactController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddContactController };
