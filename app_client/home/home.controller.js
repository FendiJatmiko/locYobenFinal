(function() {
    angular
        .module('locYobenApp')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'locYobenData', 'geolocation'];
    function homeCtrl($scope, locYobenData, geolocation) {

        var vm = this;
        vm.pageHeader = {
            title: 'LocYoben',
            strapline: 'Find places to work with wifi near you!'
        };
        vm.sidebar = {
            content:  "Looking for wifi and a seat and nice food and beverage.. you surely have the right apps, this apps will help you choose wifi places with good recommendation and rating."
        };
        vm.message = "Checking your location";
        vm.getData = function(position) {
            var lat = position.coords.latitude,
                lng = position.coords.longitude;
            vm.message = "Searching for nearby places";
            locYobenData.locationByCoords(lat, lng)
                .success(function(data) {
                    vm.message = data.length > 0 ? "" : "No locations found nearby";
                    vm.data = {
                        locations: data
                    };
                })
                .error(function(e) {
                    vm.message = "Sorry, something's gone wrong";
                });
        };
        vm.showError = function(error) {
            $scope.$apply(function() {
                vm.message = error.message;
            });
        };
        vm.noGeo = function() {
            $scope.$apply(function() {
                vm.message = "Geolocation is not supported by this browser.";
            });
        };
        geolocation.getPosition(vm.getData, vm.showError, vm.noGeo);
    }
})();
