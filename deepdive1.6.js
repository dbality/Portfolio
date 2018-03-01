var map;
function initialize () {
	var Norway = new google.maps.LatLng(60.4720, 8.4689)
	
	var Fantoft = new google.maps.LatLng(60.339167, 5.353333)
	
	var Holmenkollen =new google.maps.LatLng(59.965664, 10.672328)
	
	var burntchurch1 = new google.maps.Marker({
		position: Fantoft,
		title: "Fantoft Stave Church"
		});
	//burntchurch1.setMap(map);
	
	var burntchurch2 = new google.maps.Marker({
		position: Holmenkollen,
		title: "Holmenkollen Chapel"
		});
	//burntchurch2.setMap(map);
	
	var mapOptions = {
		zoom: 7,
		center: Norway,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	var churchinfo = '<div class="infobox">' +
		'<p>Burned down by Varg Vikernes of Burzum. Used as album cover on EP Aske.</p>' +
		'</div>'
	
	var churchwindow = new google.maps.InfoWindow({
		content: churchinfo
		});
		
	var chapelinfo = '<div class="infobox">' +
		'<p>Burned down by Varg Vikernes (Burzum), Faust (Emperor), and Euronymous (Mayhem).</p>' +
	    	'<p>Euronymous was killed my Varg before being tried. Varg was not found guilty by Jury.</p>' +
	    	'<p>The Judges thought this was a mistake, but did not dismiss the entire trial because of.</p>' +
		'</div>'
	
	var chapelwindow = new google.maps.InfoWindow({
		content: chapelinfo
		});
	
	google.maps.event.addListener(burntchurch1, 'click', function() {
		churchwindow.open(map, burntchurch1);
		});
	var mapElement = document.getElementById('map_canvas');
	map = new google.maps.Map(mapElement, mapOptions);
	
	burntchurch1.setMap(map);
	burntchurch2.setMap(map);
}
