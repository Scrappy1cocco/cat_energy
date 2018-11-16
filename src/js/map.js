function initMap() {
		  var mid = {lat: 59.938785, lng: 30.3232}; 
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});
		  if(window.innerWidth < 768) {
		  	var icon = "../img/map-pin.min.png";
		  } else {
		  	var icon = "../img/map-pin.png";
		  }

		  console.log(icon);

		  var marker = new google.maps.Marker({
		  	  position: mid,
		  	  map: map,
		  	  title: 'Cat_energy',
			  icon: icon
		 });
		}
google.maps.event.addDomListener(window, "load", initMap);