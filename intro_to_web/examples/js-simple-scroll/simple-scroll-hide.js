var rotation = 0; 		// rotation of logo
var lastScrollY = 0;	// store previous scroll


window.addEventListener('scroll', function(e) {
  
  
  // calculate rotation and direction
  var dir = 1;
  if(window.scrollY < lastScrollY){ dir = -1; }

  rotation += 10 * dir;

  // find the logo and apply a new transform
  document.querySelector('.logo').style.transform = "rotate("+rotation+"deg)";


  if( window.scrollY > window.innerHeight*.5 && dir == 1){
  	
  	document.querySelector('header').style.marginTop = "-80px";

  }else if( (lastScrollY-window.scrollY  ) > 50  ){
  	
  	document.querySelector('header').style.marginTop = "0px";
  }


	// save last scroll position
  lastScrollY = window.scrollY;
	
});


