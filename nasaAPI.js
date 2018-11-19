$(document).ready(function(){

	$.ajax({
		"url": "https://api.nasa.gov/neo/rest/v1/neo/browse?",
		"type": "GET",
		// could be XML or JSON
		"dataType": "JSON",
		"data" : {
			"api_key": "2BPi5uD1i3IWvJKZJkBWojoZ0uxcyrdVcDQn3seu"
		},
		success:function(data) {
			console.log(data);
			console.log(":-)");

			var neos = data.near_earth_objects;
			var doomsDay = false;
			var sizes = [];
			for(var i=0; i<neos.length; i++){
				if(data.near_earth_objects[i].is_potentially_hazardous_asteroid == true){
					doomsDay = true;
					sizes.push(data.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_max);
				}
			}
			var newHeader;
			if(doomsDay == true){
				newHeader = $("<h1>HOLY CRAP THE END IS NEAR!!!! AHHHHHHHHHHHHH</h1>");
				for(var i=0; i<sizes.length; i++){
					var astSize = $("<h3>" + sizes[i]+ " meters</h3>");
					$('body').append(astSize);
				}
			} else {
				newHeader = $("<h1>Everything is chill</h1>");
			}
			$('body').append(newHeader);
		},
		error: function(data, textStatus, errorThrown){
			console.log(errorThrown);
			console.log(":-(");
		}
	})
})