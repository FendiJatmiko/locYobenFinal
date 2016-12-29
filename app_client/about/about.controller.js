(function() {
    angular
        .module('locYobenApp')
        .controller('aboutCtrl', aboutCtrl);

    function aboutCtrl() {
        var vm = this;
        vm.pageHeader = {
            title: 'About LocYoben',
        };
        vm.main = {
            content: 'LocYoben was created to help people find places to sit down '+
                     'and get a bit of work done.\n\nLorem ipsum dolor sit amet,'+
                     ' consectetur adipiscing elit.'
        };
    }
})();
