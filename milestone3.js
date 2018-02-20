var map;
function initialize () {
	var Norway = new google.maps.LatLng(60.4720, 8.4689)
	
	var mapOptions = {
		zoom: 10,
		center: Norway,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var mapElement = document.getElementById('map_canvas');
	map = new google.maps.Map(mapElement, mapOptions);
}

//<!--google.maps.event.addDomListener(window, 'load', initialize);-->
