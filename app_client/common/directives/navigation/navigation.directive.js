(function() {
    angular
        .module('locYobenApp')
        .directive('navigation', navigation);

    function navigation() {
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/navigation/navigation.template.html',
            controller: 'navigationCtrl',
            controllerAs: 'navvm',
        };
    }
})();
