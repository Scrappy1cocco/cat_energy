function initMap() {
		  var mid = {lat: 59.938885, lng: 30.3232};
		  var markPosition = {lat: 59.938785, lng: 30.3232};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 16.7, center: mid});
		  if(window.innerWidth < 768) {
		  	var icon = "../img/map-pin.min.png";
		  } else {
		  	var icon = "../img/map-pin.png";
		  	var mid = {lat: 59.938775, lng: 30.323105}; 
		  }


		  console.log(icon);

		  var marker = new google.maps.Marker({
		  	  position: markPosition,
		  	  map: map,
		  	  title: 'Cat_energy',
			  icon: icon
		 });
		}
google.maps.event.addDomListener(window, "load", initMap);