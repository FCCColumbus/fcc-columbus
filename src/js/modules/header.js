FCCC.header = (function(FCCC, $){

	var $menu = $('.js__header-menu'),
		$navMobile = $('.header__dropdown');

	function bind() {
		$menu.on('click', function(){
			toggleNav();
		});
	}

	function toggleNav() {
		$navMobile.toggleClass('header--show');
	}

	function init() {
		bind();
	}

	return {
		init: init
	}; 

})(FCCC, jQuery);