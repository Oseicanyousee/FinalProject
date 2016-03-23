angular.module('tourApp')
	.controller("photoControl", function($scope){
			var hideModal = function(){
				// $('#product-options').modal('hide');
				angular.element('.modal').css('display', 'none');// to hide the modal
			};
	});