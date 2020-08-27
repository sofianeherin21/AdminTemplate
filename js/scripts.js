var coll = document.getElementsByClassName("card-header");
		var i;

		for (i = 0; i < coll.length; i++) {
			
		  coll[i].addEventListener("click", function() {
		    console.log(typeof i);
		    console.log(`${i-1}`)
		    var content = document.getElementsByClassName("collapse");

		    if (content[0].style.display === "block") {
		      content[0].style.display = "none";
		    } else {
		      content[0].style.display = "block";
		    }
		  });
		}