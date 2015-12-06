// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
$(function() {
    var checkMobile = window.matchMedia("only screen and (max-width: 767px)"),
        checkDesktop = window.matchMedia("only screen and (min-width: 768px)");

        $(window).on('desktop', function(e) {
        console.log('desktop');
        checkPositionForSidebar();
        $(window).unbind('scroll');
        $(window).scroll(function() {
            checkPositionForGoTop();
            checkPositionForSidebar();
            });
        });

        $(window).on('mobile', function(e) {
        console.log('mobile');
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

     

   function checkPositionForGoTop() {
        var goTop = $('#goTop');
        if ($(this).scrollTop() > 200) {
            goTop.fadeIn(500);
        } else {
            goTop.fadeOut(300);
        }
   }

	function checkPositionForSidebar() { //Only for Desktop
        $('body').removeClass('header-fixed');
	  var sidebar = $('#sidebar');
      if ($(this).scrollTop() > 110) {
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
      if ($(this).scrollTop() > 192) {
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
        

        // Animate the scroll to top
        $('.goTopAnchor').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 600);
        })

        /*checkPosition();*/
});
