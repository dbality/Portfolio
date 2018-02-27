var map;
function initialize () {
	var Norway = new google.maps.LatLng(60.4720, 8.4689)
	
	var Fantoft = new google.maps.LatLng(60.339167, 5.353333)
	
	var Holmenkollen =new google.maps.LatLng(59.965664, 10.672328)
	
	var burntchurch1 = new google.maps.Marker({
		position: Fantoft,
		title: "Fantoft Stave Church"
		});
	burntchurch1.setMap(map);
	
	var burntchurch2 = new google.maps.Marker({
		position: Holmenkollen,
		title: "Holmenkollen Chapel"
		});
	burntchurch2.setMap(map);
	
	var mapOptions = {
		zoom: 6,
		center: Norway,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	var mapElement = document.getElementById('map_canvas');
	map = new google.maps.Map(mapElement, mapOptions);
}
