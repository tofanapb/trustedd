(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {



        jQuery(window).resize(function () {
            var screenwidth = jQuery(window).width();
            if (screenwidth > 767) {
                jQuery("#menuArea").removeAttr("style");

            }
        });
     //--------------- slider-----------------//
     $('.testimonial-item-wrapper.owl-carousel').owlCarousel({
		loop:true,
		margin:20,
		autoPlay: true,
		autoplaySpeed:800,
		nav: false,
		dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				dots: true,
			},
			600:{
				items:1,
				nav:false,
				dots: true,
			},
			1000:{
				items:1,
				nav:false,
				loop:false,
				dots: true,
			}
		}
	});

        //scroll_top-up  
		
        $(window).scroll(function () {
            if ($(this).scrollTop()) {
				$('.top-up').fadeIn();
				$('.menu-area').addClass('stky');
            } else {
				$('.top-up').fadeOut();
				$('.menu-area').removeClass('stky');
            }
        });

        $(".top-up").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        });
		
		// scroll-Smoth
		
		 $('.hero-menu-item a, .hero-btn').click(function() {
            var hash = this.hash;
			var position = $(hash).offset().top;
			$('html').animate({
				scrollTop: position
			},1000);
        });
	

    });


}(jQuery));
