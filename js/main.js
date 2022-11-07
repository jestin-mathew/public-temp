(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: false,
   
     
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });





    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 800,
        responsiveClass: true,
        items: 1,
        dots: true,
        rewind: true,
        loop: true,
        nav: false,
        smartSpeed: 800,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
              items: 1
            },
        
            600: {
              items: 1
            },
        
            1024: {
              items: 1
            },
        
            1366: {
              items: 1
            }
        }
    });




    
})(jQuery);





//blogs carousel
$(document).ready(function() {

  var owl = $("#owl-demo1");

  owl.owlCarousel({
    autoplay: true,
    smartSpeed: 200,
    responsiveClass: true,
    items: 1,
    dots: true,
    rewind: true,
    loop: true,
    nav: false,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 2
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 4
        }
    }

  });

  // Custom Navigation Events
  $(".next").click(function() {
      owl.trigger('owl.next');
  })
  $(".prev").click(function() {
      owl.trigger('owl.prev');
  })
  $(".play").click(function() {
      owl.trigger('owl.play', 1000);
  })
  $(".stop").click(function() {
      owl.trigger('owl.stop');
  })

});









