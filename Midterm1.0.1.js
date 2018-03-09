var map;
function initialize () {
	var Midterm = new google.maps.LatLng(51.178884, -1.826214)
	
	
	var MidMark = new google.maps.Marker({
		position: Midterm,
		title: "Marker"
		});
	
	
	var mapOptions = {
		zoom: 18,
		center: Midterm,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	
	var MidMarkInfo = '<div class="infobox">' +
		'<p>Burned down by Varg Vikernes of Burzum. Used as album cover on EP Aske.</p>' +
		'</div>'
		
	
	
	var MidWindow = new google.maps.InfoWindow({
		content: MidMarkInfo
		});
		
	
	
	google.maps.event.addListener(MidMark, 'click', function() {
		MidWindow.open(map, MidMark);
		});
	

	
	var mapElement = document.getElementById('map_canvas');
	map = new google.maps.Map(mapElement, mapOptions);
	
	MidMark.setMap(map);
	
}
