var rotation = 0;

window.addEventListener('scroll', function(e) {
    
  rotation+=10;

  document.querySelector('.logo').style.transform = "rotate("+rotation+"deg)";

});