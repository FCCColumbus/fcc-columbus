FCCC.calendar = (function(FCCC, $){
  var key = 'enterappkey';
  var apiHeaders = new Headers();
  apiHeaders.append("Authorization", "Bearer " + key);

  var rootAddress = 'https://www.eventbriteapi.com/v3/users/me/events/?status=live';
  var setHeaders = { headers: apiHeaders };
  var apiRequest = new Request(rootAddress, setHeaders);

  function fetchEvents()  {
    var eventList;

    fetch(apiRequest)
    .then(function(res, err) {
      return res;
    }).then(function(body) {
      return body.json();
    }).then(function(body) {
      return body.events;
    }).then(function(events) {
      eventList = events.map(function(event) {
        var name = event.name.text;
        var date = new Date(event.start.local);
        var dateFormat = (date.getMonth() + 1) + "/" + date.getDate();
        var url = event.url;

        return '<div class="events__card"><a class="clickable" target="_blank" href="' + url + '"></a>' + '<div class="events__card__description"><h3 class="events__card__date">' +
                dateFormat + '</h3>' + '<h1 class="events__card__title">' + name + '</h1></div></div>';
      });
      $('.c-events').append(eventList);
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
