
var myButton = document.querySelector("#Go");

myButton.addEventListener('click',function(){

		// get input values
		var adj = document.querySelector("#adjective").value;
		var noun = document.querySelector("#noun").value;
		var verb = document.querySelector("#verb").value;

		// Make our Mad Lib
		var phrase = "Hello! I am very " + adj + " today! I think I will go " + verb + " with my " + noun + ".";

		// Add it to the page
		document.querySelector("#result").innerHTML = phrase;
		document.querySelector("#Go").style.opacity = "0";
});


/*
	// jQuery

var myButton = $("#Go");

myButton.click( function(){
	var adj = $("#adjective").val();
	var noun = $("#noun").val();
	var verb = $("#verb").val();

	// Make our Mad Lib
	var phrase = "Hello! I am very " + adj + " today! I think I will go " + verb + " with my " + noun + ".";

	// Add it to the page
	$("#result").html(phrase);
} );

*/