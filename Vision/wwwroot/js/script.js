(function($) {
    
    "use strict";

    /* ==================== Preloader ==================== */
        function preloader_load() {
            var preLoader = $('.preloader');
            if(preLoader.length){
                preLoader.delay(400).fadeOut(500);
            }
        }

      // Scroll To Top
      $(window).on('scroll', function () {
          if ($(this).scrollTop() > 200) {
              $('.scrollup').fadeIn();
          } else {
              $('.scrollup').fadeOut();
          }
      });
      $('.scrollup').on('click', function () {
          $("html, body").animate({
              scrollTop: 0
          }, 1000);
          return false;
      });

      // Navbar
      var nav = $('.main-navigation');
      
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              nav.addClass("fixed-header");
          } else {
              nav.removeClass("fixed-header");
          }
      });


      $(document).ready(function(){
          var dropDown = $('.dropdown');
          //Show dropdown on hover only for desktop devices
          if($(window).innerWidth() > 767){
              dropDown.on({
                  mouseenter: function () {
                      dropDown.clearQueue();
                      $(this).find('>.dropdown-menu').addClass('show');
                  },
                  mouseleave: function () {
                      $(this).find('>.dropdown-menu').removeClass('show');
                  }
              });

          }

          //Show dropdown on click only for mobile devices
          if($(window).innerWidth() < 768) {
              dropDown.on('click', function(event){

                  // Avoid having the menu to close when clicking
                  event.stopPropagation();

                  // close all the siblings
                  $(this).siblings().removeClass('show');
                  $(this).siblings().find('>.dropdown-menu').removeClass('show');

                  // close all the submenus of siblings
                  $(this).siblings().find('>.dropdown-menu').parent().removeClass('show');

                  // opening the one you clicked on
                  $(this).find('>.dropdown-menu').toggleClass('show');
                  $(this).siblings('>.dropdown-menu').toggleClass('show');
              });
          }
      });



      // Default Class Js // Use To Background Images // Not Delete JS //
        var dataBackground = $('[data-background]');
        if (dataBackground.length > 0) {
          dataBackground.each(function() {
              var $background, $backgroundmobile, $this;
              $this = $(this);
              $background = $(this).attr('data-background');
              $backgroundmobile = $(this).attr('data-background-mobile');
              if ($this.attr('data-background').substr(0, 1) === '#') {
                return $this.css('background-color', $background);
              } else if ($this.attr('data-background-mobile') && device.mobile()) {
                return $this.css('background-image', 'url(' + $backgroundmobile + ')');
              } else {
                return $this.css('background-image', 'url(' + $background + ')');
              }
            });
        }

     // Gallery filter 
    var galleryFilterLi = $('.gallery-filter li');
    if(galleryFilterLi.length){
        galleryFilterLi.on("click",function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    }

    var galleryFilter = $('.gallery-filter');
    if(galleryFilter.length){
        galleryFilter.on('click', 'a', function () {
            $('#filters button').removeClass('current');
            $(this).addClass('current');
            var filterValue = $(this).attr('data-filter');
            $(this).parents(".gallery-filter-item").next().isotope({filter: filterValue});
        });
    }

    
    // isotope | init Isotope
    if ($.fn.imagesLoaded && $(".gallery:not(.gallery-masonry)").length > 0) {
        var $container = $(".gallery:not(.gallery-masonry)");
        imagesLoaded($container, function () {
            setTimeout(function(){
                $container.isotope({
                    itemSelector: '.gallery-item',
                    layoutMode: 'fitRows',
                    filter: '*'
                });

                $(window).trigger("resize");
                // filter items on button click
            },500);

        });
    }

    
      // Default Class Js // Use To Background Images // Not Delete JS // 
      $('#sidebar-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots: true,
          nav:false,
          autoplayHoverPause:false,
          autoplay: true,
          smartSpeed: 1500,
          navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
          ],
          responsive: {
              0: {
                  items: 1,
                  center: false
              },
              480:{
                  items:1,
                  center: false
              },
              600: {
                  items: 1,
                  center: false
              },
              768: {
                  items: 1
              },
              992: {
                  items: 1
              },
              1200: {
                  items: 1
              }
          }
      });
      

      // Shop Discription // Not Delete JS // 
      $('#shop-3col-carousel').owlCarousel({
          loop:true,
          margin:10,
          dots: true,
          nav:false,
          autoplayHoverPause:false,
          autoplay: true,
          smartSpeed: 1500,
          navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
          ],
          responsive: {
              0: {
                  items: 1,
                  center: false
              },
              480:{
                  items:1,
                  center: false
              },
              600: {
                  items: 1,
                  center: false
              },
              768: {
                  items: 2
              },
              992: {
                  items: 3
              },
              1200: {
                  items: 3
              }
          }
      });
      

      $('#baner-slider').owlCarousel({
          loop:true,
          margin:0,
          dots: false,
          nav:false,
          autoplayHoverPause:false,
          autoplay: true,
          smartSpeed: 1500,
          navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
          ],
          responsive: {
              0: {
                  items: 1,
                  center: false
              },
              480:{
                  items:1,
                  center: false
              },
              600: {
                  items: 1,
                  center: false
              },
              768: {
                  items: 1
              },
              992: {
                  items: 1
              },
              1200: {
                  items: 1
              }
          }
      });


    //owl-Carousel-TwoColumn
    $(".specialplaces_carousel").owlCarousel({
        loop:true,
        autoplay: false,
        autoplayHoverPause:false,
        smartSpeed: 700,
        items: 3,
        margin:30,
        dots: false,
        nav:true,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },
          600:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          },
          1200:{
            items:3
          }
        }
    });

    //owl-Carousel-TwoColumn
    $(".specialpackages_carousel").owlCarousel({
        loop:true,
        autoplay: false,
        autoplayHoverPause:false,
        smartSpeed: 700,
        items: 2,
        margin:30,
        dots: false,
        nav:true,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },
          600:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:2
          },
          1200:{
            items:2
          }
        }
    });

    //owl-Carousel-TwoColumn
    $(".latesthotel_carousel").owlCarousel({
        loop:true,
        autoplay: false,
        autoplayHoverPause:false,
        smartSpeed: 700,
        items: 2,
        margin:30,
        dots: false,
        nav:true,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },
          600:{
            items:1
          },
          800:{
            items:1
          },
          992:{
            items:2
          },
          1200:{
            items:2
          }
        }
    });

    //owl-Carousel-TwoColumn
    $("#testimonials-carousel-4").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 4,
        margin:30,
        dots: true,
        nav:false,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>'
        ],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },
          600:{
            items:2
          },
          800:{
            items:3
          },
          1024:{
            items:4
          },
          1200:{
            items:4
          }
        }
    });

    //owl-Carousel-TwoColumn
    $(".testimonials_slide").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 1,
        margin:30,
        dots: false,
        nav:true,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ]
    });

    //owl-Carousel-TwoColumn
    $(".testimonials_slide_col_two").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 2,
        margin:30,
        dots: false,
        nav:true,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ],
        responsive:{
          0:{
            items:1
          },
          480:{
            items:1
          },
          600:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:2
          },
          1200:{
            items:2
          }
        }
    });

    //owl-Carousel-TwoColumn
    $("#testimonials_carousel").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 1,
        margin:30,
        dots: true,
        nav:true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>'
        ]
    });


    //owl-Carousel-TwoColumn
    $("#client_carousel").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 6,
        margin:30,
        dots: false,
        nav:true,
        navText: [
          '<i class="flaticon-back-1"></i>',
          '<i class="flaticon-next"></i>'
        ],
        responsive:{
          0:{
            items:2
          },
          480:{
            items:3
          },
          600:{
            items:3
          },
          800:{
            items:4
          },
          1024:{
            items:6
          },
          1200:{
            items:6
          }
        }
    });

      //bootstrap Slider JS Start
      $('#slider-style-one').bsTouchSlider();
      //bootstrap Slider JS End


      //flexslider JS Start
      $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false
      });
      //flexslider JS End



      //slick JS Start
      $(document).ready(function(){  
        var slickSlider = $('.slick-slider-one');

        slickSlider.on('init', function(event, slick){
          $('.animated').addClass('activate fadeInUp');
        });   

        slickSlider.slick({
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
          dots: true,
        });     
      var animatedOffOn = $('.animated');
        slickSlider.on('afterChange', function(event, slick, currentSlide) {
            animatedOffOn.removeClass('off');
            animatedOffOn.addClass('activate fadeInUp');
        });   

        slickSlider.on('beforeChange', function(event, slick, currentSlide) {
            animatedOffOn.removeClass('activate fadeInUp');
            animatedOffOn.addClass('off');
        });
      });
      //slick JS Start

      //Video Player JS Strat
      $('.player').mb_YTPlayer();
      //Video Player JS End


      //LightBox / MagnificPopup start

      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: true,

          fixedContentPos: false
      });

      $('.lightbox-image').magnificPopup({
        type: 'image',
        removalDelay: 500,
        mainClass: 'mfp-fade',
        // other optionsgallery: 
              gallery: {
                  enabled: true,
                  navigateByImgClick: true,
                  preload: [0,1]
              },
              
               retina: {
                  ratio: 1, // Increase this number to enable retina image support.
                  // Image in popup will be scaled down by this number.
                  // Option can also be a function which should return a number (in case you support multiple ratios). For example:
                  // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }


                  replaceSrc: function(item, ratio) {
                    return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
                  } // function that changes image source
              }
      });
      //LightBox / MagnificPopup End


      // makes the parallax elements JQUARY Start
      function parallaxIt() {
        // create variables
        var $fwindow = $(window);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        var $contents = [];
        var $backgrounds = [];

        // for each of content parallax element
        $('[data-type="content"]').each(function(index, e) {
          var $contentObj = $(this);

          $contentObj.__speed = ($contentObj.data('speed') || 1);
          $contentObj.__fgOffset = $contentObj.offset().top;
          $contents.push($contentObj);
        });

        // for each of background parallax element
        $('[data-type="parallax"]').each(function() {
          var $backgroundObj = $(this);

          $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
          $backgroundObj.__fgOffset = $backgroundObj.offset().top;
          $backgrounds.push($backgroundObj);
        });

        // update positions
        $fwindow.on('scroll resize', function() {
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          $contents.forEach(function($contentObj) {
            var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

            $contentObj.css('top', yPos);
          })

          $backgrounds.forEach(function($backgroundObj) {
            var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

            $backgroundObj.css({
              backgroundPosition: '50% ' + yPos + 'px'
            });
          });
        });

        // triggers winodw scroll for refresh
        $fwindow.trigger('scroll');
      };
      parallaxIt();
      // Parallax elements JQUARY End

      // Type Slider JQUARY Start
      function typeSlider() {
        var TxtRotate = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
        };
        TxtRotate.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];

          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

          var that = this;
          var delta = 300 - Math.random() * 100;

          if (this.isDeleting) { delta /= 2; }

          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }

          setTimeout(function() {
            that.tick();
          }, delta);
        };
        window.onload = function() {
          var elements = document.getElementsByClassName('txt-rotate');
          for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
          document.body.appendChild(css);
        };
      };
      typeSlider() 
      // Type Slider JQUARY End



      $(document).on('click','.widget-categories-list a',function(){
        var paerent = $(this).closest('li');
        var t = $(this);
        if(paerent.children('ul').length > 0){
          $(this).closest('li').children('ul').slideToggle();
          return false;
        }
      });

    // ----------- Ajax Contact script -----------//
    $(function() {
        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function(event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function(response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#f_name').val('');
                    $('#l_name').val('');
                    $('#email').val('');
                    $('#subject').val('');
                    $('#message').val('');
                })

                .fail(function(data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });


    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function() {

        preloader_load();

     });

    /*==========================================================================
        WHEN WINDOW READY
    ==========================================================================*/
    $(document).on('ready', function() {

    });


    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {
    });

    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {

    });


})(window.jQuery);

    
       
