var map;
function initialize () {
	var Norway = new google.maps.LatLng(60.4720, 8.4689)
	
	var Fantoft = new google.maps.LatLng(60.339167, 5.353333)
	
	var Holmenkollen = new google.maps.LatLng(59.965664, 10.672328)
	
	var Notodden = new google.maps.LatLng(59.629444, 9.191389)
	
	var Bergen = new google.maps.LatLng(60.389444, 5.33) //gorgoroth, Abbath, Immortal
	
	var Olso = new google.maps.LatLng(59.916667, 10.733333) //dimmu,mayhem
	
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
	var hometown1 = new google.maps.Marker({
		position: Notodden
		title: "Notodden, Emperor's Birth Place"
	});
	
	var hometown2 = new google.maps.Marker({
		position: Bergen
		title: "Bergen, Burzum's Birth Place"
	});
	
	var hometown3 = new google.maps.Marker({
		position: Olso
		title: "Olso, Mayhem's Birth Place"
	});
	
	var mapOptions = {
		zoom: 7,
		center: Norway,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
	
	var churchinfo = '<div class="infobox">' +
		'<p>Burned down by Varg Vikernes of Burzum. Used as album cover on EP Aske.</p>' +
		'</div>'
		
	var chapelinfo = '<div class="infobox">' +
		'<p>Burned down by Varg Vikernes (Burzum), Faust (Emperor), and Euronymous (Mayhem).</p>' +
	    	'<p>Euronymous was killed by Varg before being tried. Varg was found not-guilty by Jury.</p>' +
	    	'<p>The Judges thought this was a mistake, but did not dismiss the entire trial because of.</p>' +
		'</div>'
	
	var town1info = '<div class="infobox">' +
	    	'<p>This is where Emperor was formed of which Faust, who burned down Holmenkollen Chapel,</p>' +
	    	'<p>was a founding member of the band.</p>' +
	   	'</div>'
	
	var town2info = '<div class="infobox">' +
	    	'<p>Hometown of Burzum, Gorgoroth, and Immortal.</p>'+
	    	'<p>Immortal, and its founding members, stayed out of the Black Metal circle which was responsible</p>' +
	    	'<p>for the string of church burnings across Norway and a few murders.</p>' +
	    	'</div>'
	
	var town3info = '<div class="infobox">' +
	    	'<p>Birthplace of Mayhem and Dimmu Borgir</p>' +
	    	'<p>Mayhem has the most notorious history in Black Metal.</p>' +
	    	'<p>Vocalist Dead was suffering from depression and was talked into commiting suicide, he used a shotgun.</p>'+
	    	'<p>A picture was taken immediately after by another band member, who talked him into it, and was used as an album</p>' +
	    	'<p>cover on live album "The Dawn of the Black Hearts". Euronymous was stabbed 27 times by Varg (Burzum).</p>' +
	    	'</div>'
	
	var churchwindow = new google.maps.InfoWindow({
		content: churchinfo
		});
		
	var chapelwindow = new google.maps.InfoWindow({
		content: chapelinfo
		});
	
	var town1window = new google.maps.InfoWindow({
		content: town1info
		});
	
	var town2window = new google.maps.InfoWindow({
		content: town2info
		});
	
	var town3window = new google.maps.InfoWindow({
		content: town3info
		});
	
	google.maps.event.addListener(burntchurch1, 'click', function() {
		churchwindow.open(map, burntchurch1);
		});
	
	google.maps.event.addListener(burntchurch2, 'click', function() {
		chapelwindow.open(map, burntchurch2);
		});
	
	google.maps.event.addListener(hometown1, 'click', function() {
		town1window.open(map, hometown1);
		});
	
	google.maps.event.addListener(hometown2, 'click', function() {
		town2window.open(map, hometown2);
		});
	
	google.maps.event.addListener(hometown3, 'click', function() {
		town3window.open(map, hometown3);
		});
	
	var mapElement = document.getElementById('map_canvas');
	map = new google.maps.Map(mapElement, mapOptions);
	
	burntchurch1.setMap(map);
	burntchurch2.setMap(map);
	hometown1.setMap(map);
	hometown2.setMap(map);
	hometown3.setMap(map);
}
