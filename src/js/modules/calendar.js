FCCC.calendar = (function(FCCC, $){
	
	var eventList, name, date, dateFormat, url, setHeaders, apiRequest,
		key = 'placeapikey',
		$cEvent = $('.c-events'),
		apiHeaders = new Headers(),
		rootAddress = 'https://www.eventbriteapi.com/v3/users/me/events/?status=live';

	function fetchEvents()  {
		apiHeaders.append("Authorization", "Bearer " + key);
		setHeaders = { headers: apiHeaders };
		apiRequest = new Request(rootAddress, setHeaders);

		fetch(apiRequest)
		.then(function(res, err) {
			return res;
		}).then(function(body) {
			return body.json();
		}).then(function(body) {
			return body.events;
		}).then(function(events) {
			eventList = events.map(function(event) {
				name = event.name.text;
				date = new Date(event.start.local);
				dateFormat = (date.getMonth() + 1) + "/" + date.getDate();
				url = event.url;
				
				return '<div class="events__card"><a class="clickable" target="_blank" href="' + url + '"></a>' + '<div class="events__card__description"><h3 class="events__card__date">' +
				dateFormat + '</h3>' + '<h1 class="events__card__title">' + name + '</h1></div></div>';
			});
			$cEvent.append(eventList);
		});
	}

	function bind() {
		fetchEvents();
	}

	function init() {
		bind();
	}

	return {
		init: init
	};

})(FCCC, jQuery);
