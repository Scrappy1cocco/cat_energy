function initMap() {
		  var uluru = {lat: 59.9387, lng: 30.3238};
		  var mid = {lat: 59.9391642, lng: 30.3216};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});
		  if(window.innerWidth < 768) {
		  	var icon = "../img/map-pin.min.png";
		  } else {
		  	var icon = "../img/map-pin.png";
		  }

		  console.log(icon);

		  var marker = new google.maps.Marker({
		  	  position: uluru,
		  	  map: map,
		  	  title: 'Cat_energy',
			  icon: icon
		 });
		}
google.maps.event.addDomListener(window, "load", initMap);
function initMap() {
		  var uluru = {lat: 59.9387, lng: 30.3238};
		  var mid = {lat: 59.9391642, lng: 30.3216};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});
		  if(window.innerWidth < 768) {
		  	var icon = "../img/map-pin.min.png";
		  } else {
		  	var icon = "../img/map-pin.png";
		  }

		  console.log(icon);

		  var marker = new google.maps.Marker({
		  	  position: uluru,
		  	  map: map,
		  	  title: 'Cat_energy',
			  icon: icon
		 });
		}
google.maps.event.addDomListener(window, "load", initMap);
function initMap() {
		  var uluru = {lat: 59.9387, lng: 30.3238};
		  var mid = {lat: 59.9391642, lng: 30.3216};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});
		  if(window.innerWidth < 768) {
		  	var icon = "../img/map-pin.min.png";
		  } else {
		  	var icon = "../img/map-pin.png";
		  }
		  var marker = new google.maps.Marker({
		  	  position: uluru,
		  	  map: map,
		  	  title: 'Cat_energy',
			  icon: icon
		 });
		}
google.maps.event.addDomListener(window, "load", initMap);
function initMap() {
		  var uluru = {lat: 59.9387, lng: 30.3238};
		  var mid = {lat: 59.9391642, lng: 30.3216};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});

		  if(window.innerWidth < 768) {
		  var marker = new google.maps.Marker({
		  	  position: uluru,
		  	  map: map,
		  	  title: 'Nerds',
		  	  icon: {
		  	  		url: "../img/map-pin.png"
		  	  	}
		    });
			}
		}
google.maps.event.addDomListener(window, "load", initMap);
function initMap() {
		  var uluru = {lat: 59.9387, lng: 30.3238};
		  var mid = {lat: 59.9391642, lng: 30.3216};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});
		  var marker = new google.maps.Marker({
		  	  position: uluru,
		  	  map: map,
		  	  title: 'Nerds',
		  	  if(window.innerWidth < 768) {
		  	  	icon: {
		  	  		url: "../img/map-pin.png"
		  	  	}
		  	  }
		 });
		}
google.maps.event.addDomListener(window, "load", initMap);
function initMap() {
		  var uluru = {lat: 59.9387, lng: 30.3238};
		  var mid = {lat: 59.9391642, lng: 30.3216};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});
		  var marker = new google.maps.Marker({
		  	  position: uluru,
		  	  map: map,
		  	  title: 'Nerds',
			  icon: {
				url: "../img/map-pin.png"
			}
		 });
		}
google.maps.event.addDomListener(window, "load", initMap);
function initMap() {
		  var uluru = {lat: 59.9387, lng: 30.3238};
		  var mid = {lat: 59.9391642, lng: 30.3216};
		  var map = new google.maps.Map(
		      document.getElementById('map'), {zoom: 17, center: mid});
		  var marker = new google.maps.Marker({
		  	  position: uluru,
		  	  map: map,
		  	  title: 'Nerds',
			  icon: {
				url: "nerds-img/content/map-marker.png"
			}
		 });
		}
google.maps.event.addDomListener(window, "load", initMap);
function initMap() {
    var centerLatLng = new google.maps.LatLng(59.938918, 30.323183);
 
    var mapOptions = {
        center: centerLatLng,
        zoom: 8              
    };
 
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
google.maps.event.addDomListener(window, "load", initMap);
// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(59.938918, 30.323183);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(59.938918, 30.323183);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 10               // Зум по умолчанию. Возможные значения от 0 до 21
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});
var navMain = document.querySelector('.header__nav');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__nav--closed')) {
		navMain.classList.remove('header__nav--closed');
		navMain.classList.add('header__nav--opened');
	} else {
		navMain.classList.add('header__nav--closed');
		navMain.classList.remove('header__nav--opened');
	}
});