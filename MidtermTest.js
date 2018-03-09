var map;
function initialize () {
	var Norway = new google.maps.LatLng(51.178884, -1.826214)
	
	var mapOptions = {
		zoom: 18,
		center: Norway,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	var mapElement = document.getElementById('map_canvas');
	map = new google.maps.Map(mapElement, mapOptions);
}
