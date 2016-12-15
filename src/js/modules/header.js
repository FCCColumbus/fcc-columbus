FCCC.header = (function(FCCC, $){

	var dropdown = false;

	function bind() {
		console.log('index init');

		$('.js__header-menu').on('click', function(){ toggleNav(); });
	}

	function toggleNav() {
		if (!dropdown){
			$('.headerdropdown').addClass('headerdropdown--show');
			dropdown = true;
		} else {
			$('.headerdropdown').removeClass('headerdropdown--show');
			dropdown = false;
		}
	}

	function init() {
		bind();
	}

	return {
		init: init
	}; 

})(FCCC, jQuery);