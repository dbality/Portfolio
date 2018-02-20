function initialize () {
	var Norway = new google.maps.LatLng(60.4720, 8.4689)
	
	var mapOptions = {
		zoom: 10,
		center: Norway,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}
