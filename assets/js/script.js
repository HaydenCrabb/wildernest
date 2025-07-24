function closeModal(button) {
	//if not triggered by button, re-enable scroll
	if (!button) {
		$('#hamburger-icon').toggleClass('open');
		$("html").toggleClass("no-scroll");
	}


	//make animation happen with gsap
	gsap.to(".menu-modal-inner", {
        xPercent: 100,
        yPercent: -100,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
            // Remove open class and clear transform
            $(".menu-modal").removeClass('open');
            gsap.set(".menu-modal-inner", { clearProps: "borderRadius,transform" });
            gsap.set(".mobile-menu-list-wrapper li", { clearProps: "opacity,transform" });
        }
    });
}


$('#hamburger-icon').on('click', function() {

    $(this).toggleClass('open');

    /* Prevent scrolling and re-enable it */
    $("html").toggleClass("no-scroll");

    if ($(".menu-modal").hasClass('open')) {
    	closeModal(true);
    }
    else {
    	//make object appear.
    	$(".menu-modal").addClass('open');

    	//animate object 
    	gsap.from(".menu-modal-inner", {
		  xPercent: 100,
		  yPercent: -100,
		  borderRadius: 0,
		  duration: 0.5,
		  ease: "power2.out",
		  onComplete: () => {

		  	//animate every child. 
		  	gsap.to(".mobile-menu-list-wrapper li", {
			  x: "-1em",               
			  opacity: 1,           
			  duration: 0.5,
			  ease: "power2.out",
			  stagger: 0.06
			});
		  }
		});
    }

});

$(".menu-modal").on('click', function() {
	closeModal(false);
});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('#site-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#site-header').addClass("header-hidden");
    } else {
        // Scroll Up
        if(st < lastScrollTop || st < navbarHeight) {
            $('#site-header').removeClass("header-hidden");
        }
    }
    lastScrollTop = st;
}