FCCC.calendar = (function(FCCC, $){
  var eventScheduler = (function() {
    var key = 'SN4VKNK4YDOHUIYCOY6L';
    var apiHeaders = new Headers();
    apiHeaders.append("Authorization", "Bearer " + key);

    var rootAddress = 'https://www.eventbriteapi.com/v3/users/me/events/'
    var setHeaders = {
      headers: apiHeaders
    }

    var apiRequest = new Request(rootAddress, setHeaders);

    return {
      fetchEvents: function() {
        var eventList;

        fetch(apiRequest)
        .then(function(res, err) {
          return res;
        }).then(function(body) {
          return body.json();
        }).then(function(body) {
          console.log(body.events);
          return body.events;
        }).then(function(events) {
          eventList = events.map(function(event) {
            var name = event.name.text;
            var date = new Date(event.start.local);

            return "<li>event: " + name + "\n" + " date: " + (date.getMonth() + 1) + "/" + date.getDate() + "</li>"
          });
          $('#list').append(eventList);
        })
      }
    }
  })();

	function bind() {

	}

	function init() {
		bind();
	}

	return {
		init: init
	};

})(FCCC, jQuery);
