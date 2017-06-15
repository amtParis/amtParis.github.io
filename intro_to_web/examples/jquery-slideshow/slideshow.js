// cycle on load to see it is sliding
playSlideshow();

var player = setInterval(playSlideshow,4000);

function playSlideshow(){

	$(".slideshow ul").animate({marginLeft:-500},1000,swapForward);

}

function swapForward(){

	var firstInList = $("li:first");
	var lastInList = $("li:last");
	
	lastInList.after(firstInList);	// insert the first afer the last
	
	$(".slideshow ul").css("margin-left",0);	// reset margin


}


