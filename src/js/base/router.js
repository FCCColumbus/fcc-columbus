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
		if (body.hasClass('index')){ FCCC.index.init(); }
		if (body.hasClass('login')){ FCCC.signin.init(); }
	}

	return {
		init: init
	};

})(FCCC, jQuery);

FCCC.router.init();