$(document).ready(function(){

	$("#input").keypress(function(event){
		// the keycode for enter is 13
		if(event.keyCode == 13){
			// do stuff because user hit enter
			var searchTerm = $("#input").val();
			$("h1").remove();
			$.ajax({
				// ajax function takes one object as a parameter
				'url': "https://api.nytimes.com/svc/search/v2/articlesearch.json?",
				// there are different types of request - POST, PUT, DELTE, and GET
				// POST you are creating something in the database
				// PUT you updating something in the database
				// DELETE request you delete from the database
				// GET request you access something from the database
				'type': "GET",
				'dataType': "JSON",
				'data': {
					// parameters that will be added to my url
					'api-key': "10b590732f184c9190f0df6e468f7e8d",
					'q': searchTerm
				},
				success: function(data){
					// call this function if request works
					console.log(data);
					// give me an array of last 10 or less articles with my search term
					var myArticles = data.response.docs;
					for(var i=0; i<myArticles.length; i++){
						if(data.response.docs[i].headline.main != searchTerm) {
							// console.log(data.response.docs[i].headline.main);
							var newHeader = $("<h1>" + data.response.docs[i].headline.main + "</h1>");
							$('body').append(newHeader);
						}
					}

				},
				error: function(data, textStatus, errorThrown) {
					// call this function if request throws an error
		        	console.log("whomp, whomp")
		            //Do Something to handle error
		            console.log(errorThrown);
		        }
			});
		}
	

	
});


})