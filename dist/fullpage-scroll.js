/*

Basis for how this works:

	-element with fullpage-scroll="top" and fullpage-scroll="noscroll"
	are at the top and take up the full page, they have event listeners
	that resize them with the page

	-element with fulllpage-scroll="scroll" (not used with fullpage-scroll="noscroll")
	has a margin-top property equal to the height of the page so that it sits 
	right below the fullpage-scroll="top" element

	-much of the essential behavior is in the css

*/

(function(){

'use strict';

angular
	.module('FullpageScroll',[])
	.directive('fullpageScroll', FullpageScroll);

// injecting dependencies
FullpageScroll.$inject = ['$window'];

function FullpageScroll ($window) {

	return {
		link: function(scope,element,attr){

			//'top' or 'noscroll' will take up a full page and resize with the page
			if(attr.fullpageScroll === 'top' || attr.fullpageScroll === 'noscroll'){
				element.css({
					'height': String($window.innerHeight)+'px'
				});

				$window.addEventListener('resize', function(){
					element.css({
						'height': String($window.innerHeight)+'px'
					});
				});
			}

			//'scroll' will scroll over the element with 'top'
			else if(attr.fullpageScroll === 'scroll'){
				element.css({
					'margin-top': String($window.innerHeight)+'px'
				});

				$window.addEventListener('resize', function(){
					element.css({
						'margin-top': String($window.innerHeight)+'px'
					});
				});
			}
		}
	}
}

})();