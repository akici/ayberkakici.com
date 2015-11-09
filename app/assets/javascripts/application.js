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
	function checkPosition() {
            if ($(this).scrollTop() > 200) {
                $('#goTop').fadeIn(500);
            } else {
                $('#goTop').fadeOut(300);
            }
            if ($(this).scrollTop() > 110) {
                $('#sidebar').addClass('sidebar-fixed slideInDown');
            } else {
                $('#sidebar').removeClass('sidebar-fixed slideInDown');
            }
        }
        // Show or hide the sticky footer button
        $(window).scroll(checkPosition);

        // Animate the scroll to top
        $('.goTopAnchor').click(function(event) {
            event.preventDefault();

            $('html, body').animate({scrollTop: 0}, 600);
        })

        checkPosition();
});
