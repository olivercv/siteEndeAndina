
/* ===============================================
    Function Call - Call Function Ones
   =============================================== */

   
jQuery(document).ready(function(){
	"use strict";
	
	// here all ready functions
	
	loader();
  scroll_top();
  get_top();

    accordion();

});

/* ===============================================
    1. Preloader - Themplate Preloader
   =============================================== */
function loader() {
   "use strict";
   setTimeout(function () {
     $('#loader-wrapper').fadeOut();
   }, 1500);
};

/* ===============================================
    2. Scrolling Top - Button to scroll up
   =============================================== */
function scroll_top(){
    "use strict";
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 100,
    $back_to_top = $('.cd-top');
    // $back_to_top = $('.to-top');

	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

};

function get_top(){
  "use strict";
var offset = 300,
  // offset_opacity = 1200,
  to_top_duration = 1,
  // $back_to_top = $('.cd-top');
  $get_to_top = $('.to-top');



$get_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0 ,
     }, to_top_duration
  );
});

};

/* ===============================================
    3. FAQ Accordion - This is the accordion used on the FAQ page
   =============================================== */
function accordion(){
};
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
(jQuery)


