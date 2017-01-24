FCCC.signin = (function(FCCC,$){

	var $user = $('.user'),
		$signup = $('.js--signup'),
		$signin = $('.js--signin'),
		$userLogin = $('.js--user__login'),
		$userSignup = $('.js--user__signup');

	function bindEvents(){
		console.log('signin init');

		$('#ndex-modal').click();

		$signup.on('click', function(e){
			e.preventDefault();
			signUp();
		});

		$signin.on('click', function(e){
			e.preventDefault();
			signIn();
		});

		$('[type="submit"]').on('click', function(e){
			e.preventDefault();
		});

		$('.modal-development').on('click', function(){
			modalDev();
		});
	}

	function modalDev(){
		$('.modal-development').addClass('modal--hide');
	}

	function signUp(){
		$user.addClass('user--hide');
		setTimeout(function(){
			$userLogin.addClass('user--none');
			$userSignup.removeClass('user--none');
			$user.removeClass('user--hide');
		}, 550);
	}

	function signIn(){
		$user.addClass('user--hide');
		setTimeout(function(){
			$userSignup.addClass('user--none');
			$userLogin.removeClass('user--none');
			$user.removeClass('user--hide');
		}, 550);
	}

	function init(){
		bindEvents();
	}

	return {
		init: init
	};

})(FCCC, jQuery);