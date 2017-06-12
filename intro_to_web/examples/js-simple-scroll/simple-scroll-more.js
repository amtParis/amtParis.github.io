var rotation = 0; 		// rotation of logo
var lastScrollY = 0;	// store previous scroll


window.addEventListener('scroll', function(e) {
  
  console.log("scrolling " + window.scrollY + e);
  
  // calculate rotation and direction
  var dir = 1;
  if(window.scrollY < lastScrollY){ dir = -1; }

  rotation += 10 * dir;

  // find the logo and apply a new transform
  document.querySelector('.logo').style.transform = "rotate("+rotation+"deg)";

  // save last scroll position
  lastScrollY = window.scrollY;

});


