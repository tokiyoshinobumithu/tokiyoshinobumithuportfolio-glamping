$(function () {
  setTimeout(function () {
    $(".modal").css('bottom','5%');
  },3000),
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
          }
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
  $(".topics-list").slick({
    arrows:false,
    infinite: false,
    slidesToShow: 1.3,
    slidesToScroll: 1,
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
    slidesToShow: 2.5,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    rtl:true,
  });

  $('.bottom-slider').slick({
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
    slidesToShow:3.5,
    slidesToScroll:1,
    pauseOnFocus:false,
    pauseOnHover:false,
    pauseOnDotsHover:false,
  });
});

$(function () {
  $('.page-top-btn').click(function () {
    $('body, html').animate( {
      scrollTop:0
    },600);
  }); 
});
