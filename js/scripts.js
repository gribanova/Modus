(function() {
            $(window).load(function() {
                var $flexslider = $('.flexslider');
              
              $flexslider.each(function(){
                $(this).flexslider({
                    animation: "slide",
                    directionNav: false,
                });
                $('.carousel-prev', $(this)).click(function(){
                    $(this).closest('.flexslider').flexslider('prev');
                });
                $('.carousel-next', $(this)).click(function(){
                    $(this).closest('.flexslider').flexslider('next');
                });
              })
              
                
            });
        })();



(function() {
        document.querySelector('.mobile-menu-toggle')
            .addEventListener('click', function() {
                document.querySelector('.header_menu')
                    .classList.toggle('active');
                }
            );
    }());




$(document).ready(function(){
	   $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function() {
    $('.accordion-row').click(function() {
        $(this).toggleClass('active')
    })
});

