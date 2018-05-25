var THEMEIM = THEMEIM || {};

(function($) {

  /*!----------------------------------------------
  # This beautiful code written with heart
  # by Aminul Islam <mominul@themeim.com>
  # In Dhaka, BD at the Themeim Themes workstation.
  ---------------------------------------------*/

  // USE STRICT
  "use strict";

  THEMEIM.initialize = {

    init: function() {
      THEMEIM.initialize.general();
      THEMEIM.initialize.sectionBackground();
      THEMEIM.initialize.countDown();
      THEMEIM.initialize.portfolio();
      THEMEIM.initialize.contactForm();
      THEMEIM.initialize.mobileMenu();
    },


    /*=======================================================*/
    /*=           Collection of snippet and tweaks          =*/
    /*=======================================================*/

    general: function() {




      $('.swiper-container').each(function() {
        new SwiperRunner($(this));
      });


      $('.popup-video-btn').magnificPopup({
        type: 'iframe'
      });

      /* Magnefic Popup */
      $('.popup-modal').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom'
      });

      /* Quantity Count */
      (function() {

        return $('.minus,.plus').on('click', function(e) {

          var inc_dec, qty;
          inc_dec = $(this).hasClass("minus") ? -1 : 1;
          qty = $("[name=quantity]");
          return qty.val(parseInt(qty.val()) + inc_dec);
        });

      }).call(this);

      /* Product Price Filter */
      $("#slider-range").slider({
        range: true,
        min: 50,
        max: 650,
        values: [200, 400],
        slide: function(event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
      });
      $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));


      var obj = new SwiperRunner('.gallery-top');

      // The setNav method will make link to main carousel.
      obj.setNav('.gallery-thumbs');

      $('.collapse').on('show.bs.show', function() {
        $(this).siblings('.card-header').addClass('active');
      });

      $('.collapse').on('hide.bs.show', function() {
        $(this).siblings('.card-header').removeClass('active');
      });


      // Open Close PlayList
      $('#playlist-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('close-icon');
        $('#header_player').find(".jp-playlist").fadeToggle(100);
      });

      /* Product Grid and List View */
      var $vw_prod = $('.tim-product-btn-vw');

      if ($vw_prod.length) {
        var $control = $($vw_prod.attr('data-control')),
          $input = $vw_prod.find('input');

        $input.on('change', function() {
          $control.addClass('tim-loading');

          var $this = $(this);

          $input.each(function() {
            var view = $(this).attr('data-view-class');

            $control.removeClass(view);
          });

          $control.addClass($this.attr('data-view-class'));

          $control.removeClass('tim-loading');
        });
      }

      /* Quick View Popup */
      $('.trigger').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('.quickview-wrapper').toggleClass('open');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .close-menu').on('click', function() {
          $('.quickview-wrapper').removeClass('open');
          $('.mask-overlay').remove();
        });
      });

      /* Rating Star */
      $('.rating li').on('click', function() {
        var selectedCssClass = 'selected';
        var $this = $(this);
        $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
        $this
          .addClass(selectedCssClass)
          .parent().addClass('vote-cast');
      });

      /* Product View Slider */

      //Product Single
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        swipe: false,
      });

      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        swipe: false,
        infinite: false
      });

      //Product Quick View Slider
      $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav1',
        swipe: false,
      });

      $('.slider-nav1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for1',
        focusOnSelect: true,
        swipe: false,
        infinite: false
      });


      /* Top Fixed Menu Init */
      var myElement = document.querySelector("header");
      var headroom = new Headroom(myElement);

      headroom.init({
        offset: 200,
        tolerance: {
          up: 5,
          down: 5
        },

        classes: {
          top: "headroom--top"

        }
      });

      /* Top Fixed Menu Init */
      var myElement = document.querySelector("#mobile-nav-wrap");
      var headroom = new Headroom(myElement);

      headroom.init({
        offset: 200,
        tolerance: {
          up: 5,
          down: 5
        },

        classes: {
          top: "headroom--top"

        }
      });


      soundManager.setup({

      });

      /* Plalist Active */

      $(document).on('click', '.sm2_button', function(e) {
        e && e.preventDefault();
        var $this = $(e.target);
        if (!$this.is('a')) $this = $this.closest('a');

        $('.sm2_button').not($this).removeClass('active');
        $('.sm2_button').parent('li').not($this.parent('li')).removeClass('active');

        $this.toggleClass('active');
        $this.parent('li').toggleClass('active');

      });

      // $(".content-three h2").fitText(1.2, {
      // 	minFontSize: '20px',
      // 	maxFontSize: '60px'
      // });


      var backtotop = $(".backtotop");

      var windo = $(window),
        HtmlBody = $('html, body');

      backtotop.on('click', function() {
        HtmlBody.animate({
          scrollTop: 0
        }, 1500);
      });

      /*==================================*/
      /*=           Mobile Menu          =*/
      /*==================================*/
      $('.gmap3-area').each(function() {
        var $this = $(this),
          key = $this.data('key'),
          lat = $this.data('lat'),
          lng = $this.data('lng'),
          mrkr = $this.data('mrkr');

        $this.gmap3({
            center: [lat, lng],
            zoom: 16,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            style: [{
              "featureType": "poi.business",
              "elementType": "all",
              "stylers": [{
                "hue": "#ff00ca"
              }, {
                "saturation": "100"
              }, {
                "lightness": "0"
              }, {
                "gamma": "1"
              }]
            }, {
              "featureType": "poi.business",
              "elementType": "labels.icon",
              "stylers": [{
                "hue": "#ff0000"
              }]
            }]
          })
          .marker(function(map) {
            return {
              position: map.getCenter(),
              icon: mrkr
            };
          })

      });


    },

    /*==================================*/
    /*=           Mobile Menu          =*/
    /*==================================*/

    mobileMenu: function() {

      var Accordion = function(el, multiple) {
        this.el = el || {};

        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
            el: this.el,
            multiple: this.multiple
          },
          this.dropdown);
      };

      Accordion.prototype.dropdown = function(e) {
        e.preventDefault();
        var $el = e.data.el,
          $this = $(this),

          $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
          //show only one menu at the same time
          $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
      }

      var accordion = new Accordion($('.accordion-menu'), false);

      $('.toggle-inner').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('body').toggleClass('active');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .close-menu').on('click', function() {
          $('body').removeClass('active');
          $('.mask-overlay').remove();
        });
      });
    },

    /*=========================================*/
    /*=           Section Background          =*/
    /*=========================================*/

    sectionBackground: function() {

      // Section Background Image
      $('[data-bg-image]').each(function() {
        var img = $(this).data('bg-image');
        $(this).css({
          backgroundImage: 'url(' + img + ')',
        });
      });

      //Parallax Background
      $('[data-parallax="image"]').each(function() {

        var actualHeight = $(this).position().top;
        var speed = $(this).data('parallax-speed');
        var reSize = actualHeight - $(window).scrollTop();
        var makeParallax = -(reSize / 2);
        var posValue = makeParallax + "px";

        $(this).css({
          backgroundPosition: '50% ' + posValue,
        });
      });
    },

    /*=================================*/
    /*=           Count Down          =*/
    /*=================================*/

    countDown: function() {
      $('.countdown').each(function(index, value) {
        var count_year = $(this).attr("data-count-year");
        var count_month = $(this).attr("data-count-month");
        var count_day = $(this).attr("data-count-day");
        var count_date = count_year + '/' + count_month + '/' + count_day;
        $(this).countdown(count_date, function(event) {
          $(this).html(
            event.strftime('<span class="CountdownContent">%D<span class="CountdownLabel">Days</span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%H <span class="CountdownLabel">Hours</span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%M <span class="CountdownLabel">Minutes</span></span><span class="CountdownSeparator"></span><span class="CountdownContent">%S <span class="CountdownLabel">Seconds</span></span>')
          );
        });
      });
    },


    /*========================================*/
    /*=          Portfolio Masonrty          =*/
    /*========================================*/

    portfolio: function() {

      $('.tim-container').imagesLoaded(function() {

        var $container = $('.tim-filter-items');

        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-sizer'
          }
        });


        // layout Isotope after each image loads
        // $grid.imagesLoaded().progress(function() {
        // 	$grid.isotope('layout');
        // });

        // filter items when filter link is clicked
        $('.tim-isotope-filter a').on('click', function() {
          var selector = $(this).attr('data-filter');
          $container.isotope({
            filter: selector
          });
          return false;
        });

        $('.tim-isotope-filter a').on('click', function() {
          $('.tim-isotope-filter').find('.current').removeClass('current');
          $(this).parent().addClass('current');
        });
      });
    },

    /*===================================*/
    /*=           Contact Form          =*/
    /*===================================*/

    contactForm: function() {
      $('[data-deventform]').each(function() {
        var $this = $(this);
        $('.form-result', $this).css('display', 'none');

        $this.submit(function() {

          $('button[type="submit"]', $this).addClass('clicked');

          // Create a object and assign all fields name and value.
          var values = {};

          $('[name]', $this).each(function() {
            var $this = $(this),
              $name = $this.attr('name'),
              $value = $this.val();
            values[$name] = $value;
          });

          // Make Request
          $.ajax({
            url: $this.attr('action'),
            type: 'POST',
            data: values,
            success: function success(data) {
              if (data.error == true) {
                $('.form-result', $this).addClass('alert-warning').removeClass('alert-success alert-danger').css('display', 'block');
              } else {
                $('.form-result', $this).addClass('alert-success').removeClass('alert-warning alert-danger').css('display', 'block');
              }
              $('.form-result > .content', $this).html(data.message);
              $('button[type="submit"]', $this).removeClass('clicked');
            },
            error: function error() {
              $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
              $('.form-result > .content', $this).html('Sorry, an error occurred.');
              $('button[type="submit"]', $this).removeClass('clicked');
            }
          });
          return false;
        });

      });
    }
  };

  THEMEIM.documentOnReady = {
    init: function() {
      THEMEIM.initialize.init();

    },
  };

  THEMEIM.documentOnLoad = {
    init: function() {
      // THEMEIM.initialize.init();

      $('.preloader').delay(2000).fadeOut(600);
    },
  };

  THEMEIM.documentOnResize = {
    init: function() {


    },
  };

  THEMEIM.documentOnScroll = {
    init: function() {
      THEMEIM.initialize.sectionBackground();

      if ($(this).scrollTop() > 150) {
        $('header').addClass("hide-topbar")
      } else {
        $('header').removeClass("hide-topbar")
      }

      /* Back to top */
      if ($(this).scrollTop() > 400) {
        $(".backtotop").fadeIn(500);
      } else {
        $(".backtotop").fadeOut(500);
      }



    },
  };

  // Initialize Functions
  $(document).ready(THEMEIM.documentOnReady.init);
  $(window).on('load', THEMEIM.documentOnLoad.init);
  $(window).on('resize', THEMEIM.documentOnResize.init);
  $(window).on('scroll', THEMEIM.documentOnScroll.init);

})(jQuery);