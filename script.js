  $(document).ready(function() {
	var prevScrollpos = $(window).scrollTop();
	$(window).scroll(function() {
	  var currentScrollPos = $(window).scrollTop();
  
	  if (currentScrollPos > prevScrollpos) {
		// Rolando para baixo
		$('.main-nav, #nav-icon1, .background-overlay-nav, .hr2').css('opacity', '1');
	  } else {
		// Rolando para cima
		$('.main-nav, #nav-icon1, .background-overlay-nav, .hr2').css('opacity', '0');
	  }
  
	  prevScrollpos = currentScrollPos;
	});
  });