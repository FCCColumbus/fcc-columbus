FCCC.router = (function(FCCC, $){

	function init() {

		var body = $('body');

		///////////////////////
		// Auto start        //
		///////////////////////
		FCCC.header.init();
		///////////////////////
		// Conditional Start //
		///////////////////////
		if(body.hasClass('index')) {
			//index module inits here
			// FCCC.index.init();
		}

	}

	return {
		init: init
	};

})(FCCC, jQuery);

FCCC.router.init();