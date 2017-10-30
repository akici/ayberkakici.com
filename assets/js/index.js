$(function() {
    var checkMobile = window.matchMedia("only screen and (max-width: 767px)"),
        checkDesktop = window.matchMedia("only screen and (min-width: 768px)");

        $(window).on('desktop', function(e) {
        checkPositionForSidebar();
        $(window).unbind('scroll');
        $(window).scroll(function() {
            checkPositionForGoTop();
            checkPositionForSidebar();
            });
        });

        $(window).on('mobile', function(e) {
        checkPositionHeader();
            $(window).unbind('scroll');
            $(window).scroll(function() {
                checkPositionForGoTop();
                checkPositionHeader();
            });
        });

        function isMobile(event) {
          if(event.matches) {
            $(window).trigger('mobile');
          }
        }

        isMobile(checkMobile);

        function isDesktop (event) {
          if(event.matches) {
            $(window).trigger('desktop');
          }
        }

        isDesktop(checkDesktop);

     checkMobile.addListener(function(event) {
        isMobile(event);
     });

     checkDesktop.addListener(function(event) {
        isDesktop(event);
     });

     var timeout;
     var goTop = $('#goTop');

   function checkPositionForGoTop() {
        
        if (window.pageYOffset > 200) {
            clearTimeout(timeout);
            goTop.fadeIn(500);
            timeout = setTimeout(function() {
                goTop.fadeOut(300);
            }, 2500);
        } else {
            goTop.fadeOut(300);
        }
   }

	function checkPositionForSidebar() { //Only for Desktop
        $('body').removeClass('header-fixed');
	  var sidebar = $('#sidebar');
      if (window.pageYOffset > 110) {
        sidebar.addClass('sidebar-fixed');
        sidebar.find('.photo-wrapper').addClass('slideInDown');
        sidebar.find('.sidebar-nav').addClass('slideInDown');
        sidebar.find('.photo-wrapper').removeClass('slideInUp');
        sidebar.find('.sidebar-nav').removeClass('slideInUp');
      } 
      else {
    	if(sidebar.hasClass('sidebar-fixed')) {
    		sidebar.find('.photo-wrapper').addClass('slideInUp');
    		sidebar.find('.sidebar-nav').addClass('slideInUp');
    	}
        sidebar.removeClass('sidebar-fixed');
        sidebar.find('.photo-wrapper').removeClass('slideInDown');
        sidebar.find('.sidebar-nav').removeClass('slideInDown');
      }
    }

    function checkPositionHeader() { //Only for Mobile
      var body = $('body');
      if (window.pageYOffset > 192) {
        body.addClass('header-fixed');
      } 
      else {
        /*if(header.hasClass('header-fixed')) {
            sidebar.find('.photo-wrapper').addClass('slideInUp');
            sidebar.find('.sidebar-nav').addClass('slideInUp');
        }*/
        body.removeClass('header-fixed');
      }
    }

    function animateScroll(elem) {
      $('html, body').animate({scrollTop: elem.offset().top}, 600);
    }
        

        // Animate the scroll to top
        $('.goTopAnchor').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 600);
        })

        $('#go-links').click(function(event){
            /*event.preventDefault();*/
            animateScroll($('#personal-links'));
        });

        $('#contact').click(function(event){
            /*event.preventDefault();*/
            animateScroll($('#contact-info'));
        });

        if(window.location.hash === '#personal-links') {
            animateScroll($('#personal-links'));
        }

        if(window.location.hash === '#contact') {
            animateScroll($('#contact-info'));
        }

        /*checkPosition();*/
});