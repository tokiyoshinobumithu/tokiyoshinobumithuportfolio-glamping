$(function(){
  $(window).on('load',function(){
    $('.spinner-box').delay(1000).fadeOut(2000);
    $('.spinner-box-item').delay(3000).fadeOut(2500);
  }),
  $(function (){
    $('body, html').animate( {
      scrollTop:0
    },'1');
  });
});
$(function () {
  setTimeout(function() {
    $(".mv-logo-top,.mv-logo-bottom-item,.mv-text-item").addClass('move');
  },3500);
});
$(function () {
  setTimeout(function () {
    $(".modal").css('bottom','5%');
  },6000),
  $(function (){
    $(".modal-item-close").on('click',function (){
      $(".modal").hide();
    });
  });
});
$(function (){
  var block = $(".fadein, .fadein-rotate"),
      Window = $(window);
      
      Window.scroll(function () {
        block.each(function () {
          if(Window.scrollTop() > $(this).offset().top - Window.height()) {
            $(this).addClass('show');
          } if(Window.width() > 786) {
            $(function () {
              $(".footer-contents-inner, .logo").removeClass('fadein');
            });
          };
        });
      });
});
$(function () {
  $(".navi-btn-inner").on('click', function (){
    $(".navi-btn-inner, .navi-btn-menu").toggleClass('open')
  });

  $(".feature").on('click', function () {
    $(".feature, .feature-inner").toggleClass('active')
  });
});

$(function () {
  $(".feature-menu,.feature-navi-list,.feature-navi").on('mouseover',function (){
    $(".feature-navi,.feature-menu").addClass('down')
  })
  $(function () {
    $(".feature-navi").on('mouseout',function (){
      $(".feature-navi,.feature-menu").removeClass('down')
    });
  });
});

$(function () {
  $(".topics-list").slick({
    arrows:true,
    infinite: false,
    slidesToShow: 3.6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          arrows:false,
          slidesToShow: 1.3,
        },
      },
    ],
  });
});
$(function () {
    $(".fade_slide")
      .on("init", function () {
        $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
      })
      .slick({
        autoplay: true, 
        fade: true, 
        arrows: false, 
        speed: 3000, 
        autoplaySpeed: 6000,
        pauseOnFocus: false,
        pauseOnHover: false,
      })
      .on({ 
        beforeChange: function (event, slick, currentSlide, nextSlide) {
          $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
          $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
        },
        afterChange: function () {
          $(".remove-animation", this).removeClass(
            "remove-animation add-animation"
          );
        },
    });

    
});
  
$(function() {
  $('.top-slider').slick({
    autoplay: true,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    speed: 7000,
    autoplaySpeed: 0,
    slidesToShow: 5.2,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    rtl:true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          autoplay: true,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
          speed: 7000,
          autoplaySpeed: 0,
          slidesToShow: 2.5,
          slidesToScroll: 1,
          pauseOnFocus: false,
          pauseOnHover: false,
          pauseOnDotsHover: false,
          rtl:true,
        },
      },
    ],
  });

  $('.bottom-slider').slick({
    autoplay: true,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    speed: 7000,
    autoplaySpeed: 0,
    slidesToShow: 5.2,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          autoplay: true,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
          speed: 7000,
          autoplaySpeed: 0,
          slidesToShow: 2.5,
          slidesToScroll: 1,
          pauseOnFocus: false,
          pauseOnHover: false,
          pauseOnDotsHover: false,
        },
      },
    ],
  });
});

$(function () {
  $('.footer-slider-text').slick ({
    autoplay:true,
    cssEase:'linear',
    infinite:true,
    arrows: false,
    speed: 2000,
    autoplaySpeed:0,
    slidesToShow:7,
    slidesToScroll:1,
    pauseOnFocus:false,
    pauseOnHover:false,
    pauseOnDotsHover:false,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          autoplay:true,
          cssEase:'linear',
          infinite:true,
          arrows: false,
          speed: 2000,
          autoplaySpeed:0,
          slidesToShow:3.5,
          slidesToScroll:1,
          pauseOnFocus:false,
          pauseOnHover:false,
          pauseOnDotsHover:false,
        },
      },
    ],
  });
});

$(function () {
  $('.page-top-btn').click(function () {
    $('body, html').animate( {
      scrollTop:0
    },600);
  }); 
});
