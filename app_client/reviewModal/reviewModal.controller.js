(function() {
    angular
        .module('locYobenApp')
        .controller('reviewModalCtrl', reviewModalCtrl);
    reviewModalCtrl.$inject = ['$uibModalInstance', 'locYobenData', 'locationData'];

    function reviewModalCtrl($uibModalInstance, locYobenData, locationData) {
        var vm = this;
        vm.locationData = locationData;
        vm.onSubmit = function() {
            vm.formError = "";
            if (!vm.formData.rating || !vm.formData.reviewText) {
                vm.formError = "All fields required, please try again";
                return false;
            } else {
                vm.doAddReview(vm.locationData.locationid, vm.formData);
            }
        };
        vm.doAddReview = function(locationid, formData) {
            loc8rData.addReviewById(locationid, {
                    rating: formData.rating,
                    reviewText: formData.reviewText
                })
                .success(function(data) {
                    vm.modal.close(data);
                })
                .error(function(data) {
                    vm.formError = "Your review has not been saved, try again";
                });
            return false;
        };
        vm.modal = {
            cancel: function() {
                $uibModalInstance.dismiss('cancel');
            },
            close : function (result) {
                $uibModalInstance.close(result);
            },
        };

    }
})();
