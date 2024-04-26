(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#customLoginPopup').addClass('srinkOn');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#customLoginPopup').removeClass('srinkOn');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#customLoginPopup').addClass('srinkOn');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  $('.boardCarousel').owlCarousel({
    nav: true,
    items:1,
    margin:30,
    stagePadding:30,
    autoplay: true,
    smartSpeed:450
});
$(".board .popup").magnificPopup({
  type: "image",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: true,
  gallery: {
    enabled: true
  }
});
$(".cards .popup").magnificPopup({
  type: "image",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: true,
  gallery: {
    enabled: true
  }
});

  /*=== Custom Popup ===*/
  var customPopEvent = $('.popEvent');
  var closePop = $(".customPopupContent > span.icon-add");

  $(customPopEvent).click(function(){
    
    if(localStorage.getItem('token') &&  localStorage.getItem('id') && localStorage.getItem('currentUser')){
      window.location = 'https://thetaskwiz.com/task/dashboard/';
    }else{
      var getPopId = $(this).attr('data-id');
      $('.customPopup').hide();
      $('.customPopup#'+getPopId).show();
    }

    
  });

  $(closePop).click(function(){
    $('.customPopup').hide();
  });

  $(document).mouseup(e => {
    if (
      !$('.customPopupContent').is(e.target) && // if the target of the click isn't the container...
      $('.customPopupContent').has(e.target).length === 0 && !$menu.is(e.target) && $menu.has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      $('.customPopup').hide();
    }
  });

  /*=== Custom Popup ===*/

})(jQuery);

