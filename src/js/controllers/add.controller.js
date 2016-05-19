function AddContactController ($scope, $http, URL, $state) {
  $scope.addContact = function (contactObject) {
    $http.post(URL, contactObject).then( function (res){
      // Alerts the user that Contact was saved to database URL
      alert('Contact Added!')
      // Changes state from "add" to "home"
      $state.go('home')
    });
  }
}
AddContactController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddContactController };
