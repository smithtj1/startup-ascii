'use strict';

var startupAscii = angular.module('startup-ascii', []);

startupAscii.factory('startup-ascii-printer', function(){

	var images = {
		IMAGE_FUNCTIONS
	}
	return {
		print: function(image, text){
			try{
				images[image]();
			}
			catch(err){
				console.log('startup-ascii: error finding image for: ' + image + '. sorry for partying.');
			}
		}
	}
});

//startupAscii.directive();