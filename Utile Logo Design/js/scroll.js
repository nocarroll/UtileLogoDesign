jQuery(window).scroll(function() {
        if( jQuery(window).scrollTop() > 500 ) {
            jQuery("#fixed").addClass("fade");
        } else {
            jQuery("#fixed").removeClass("fade");
        }
    });
    
    jQuery(window).scroll(function() {
        if( jQuery(window).scrollTop() > 500 ) {
            jQuery(".logo img").addClass("size");
        } else {
            jQuery(".logo img").removeClass("size");
        }
    });
    
     jQuery(window).scroll(function() {
        if( jQuery(window).scrollTop() > 500 ) {
            jQuery("nav ul li").addClass("lh");
        } else {
            jQuery("nav ul li").removeClass("lh");
        }
    });
	
	jQuery(window).scroll(function() {
        if( jQuery(window).scrollTop() > 500 ) {
            jQuery(".social ul li").addClass("lhSocial");
        } else {
            jQuery(".social ul li").removeClass("lhSocial");
        }
    });
    