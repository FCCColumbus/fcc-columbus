FCCC.signin = (function(FCCC,$){

	var $user = $('.signin__user'),
		$signup = $('.js--signup'),
		$signin = $('.js--signin'),
		$userLogin = $('.js--user-login'),
		$userSignup = $('.js--user-signup');

	function bindEvents(){
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
		$user.addClass('signin__user--hide');
		setTimeout(function(){
			$userLogin.addClass('signin__user--none');
			$userSignup.removeClass('signin__user--none');
			$user.removeClass('signin__user--hide');
		}, 550);
	}

	function signIn(){
		$user.addClass('signin__user--hide');
		setTimeout(function(){
			$userSignup.addClass('signin__user--none');
			$userLogin.removeClass('signin__user--none');
			$user.removeClass('signin__user--hide');
		}, 550);
	}

	function init(){
		bindEvents();
	}

	return {
		init: init
	};

})(FCCC, jQuery);