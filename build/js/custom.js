/**
* @author shahzad ali <shahzadnagri99@gmail.com>
* &
* @author nekoras
* @date jan 20, 2016
* @description 
**/



$(document).ready(function  () {
    init();
    

});

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    // $("h1").fitText(
    //     1.2, {
    //         minFontSize: '35px',
    //         maxFontSize: '65px'
    //     }
    // );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict


function init(){

  //- MC 
    vegasBaground_mc();


    back2top();
    popup();
    mixitup();
    loading();
    // switcher();
    share_btn();
    collpasea_button();



}


function loading(){
      Pace.on("start", function(){
        $(".paceloder").show();
    });

    Pace.on("done", function(){
        $(".paceloder").hide();
    });
}


function share_btn(){
 $(function(){

$('.share-button').share({

url: 'http://www.jqueryscript.net', //  the url you want to share. default: window.location.href

title: 'Free jQuery Plugins', //

text: 'Sa.', // text to be tweeted alongside your link, default: your page's meta description

image: 'http://www.jqueryscript.net/images/logo.png', // image to be shared (facebook-specific)

app_id: 'YOUR FACEBOOK API KEY', // facebook app id for tracking shares. if provided, will use the facebook API

background: 'rgba(255,255,255,.5)', // background color of the button, default: #e1e1e1

color: '#3B2B45', // text color of the button

button_text: 'share' // change the text of the button, default: Share

})
facebook: {

name: 'Free jQuery Plugins'

link: 'http://www.jqueryscript.net'

image: 'http://www.jqueryscript.net/images/logo.png'

caption: 'jQuery Plugins'

text: 'A free jQuery Plugin website.'

}


twitter: {

text: 'Free jQuery Plugins'

link: 'http://www.jqueryscript.net'

}

 

gplus: {

link: 'http://www.jqueryscript.net'

}


});
}


function switcher(){
  $('.sw-clr ').click(function(){
    ths = $(this);
    fileName = 'css/' + ths.data('target') + '.css';

    $('#switcher-target').prop('href', fileName);
});
}


// ================================MIXITUP CODED HERE================================================

function mixitup(){
$('#container1').mixItUp({
  animation: {
    // effects: 'translateX',
    enable: true,
    effects: 'fade scale',
    duration: 600,
    easing: 'ease',
    perspectiveDistance: '3000px',
    perspectiveOrigin: '50% 50%',
    queue: true,
    queueLimit: 1,
    animateChangeLayout: false,
    animateResizeContainer: true,
    animateResizeTargets: false,
    staggerSequence: null,
    reverseOut: true,
  }
});

}



// ================================BACK TO TOP CODED HERE================================================
function back2top(){
  // height -> scrollTop > height.
  $(window).scroll(function(){
    scrollTop = $(this).scrollTop();
    height = $(window).height();
    element = $("#backtotop");
    // display 
    if(scrollTop > height) {
    element.fadeIn('slow');
    } else {
    element.fadeOut('slow');
    }
  });

  

  scrollTop = $(window).scrollTop();
  height = $(window).height();
  element = $("#backtotop");

  if(scrollTop > height) {
  element.fadeIn();
  } else {
  element.fadeOut();
  }


  $('#backtotop').click(function(){
  $('html, body').animate({scrollTop: 0}, 800);
  });


}

// ================================POPUP CODED HERE================================================
function popup(){
  $('.popup-gallery').each(function(){
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    // z-index: 40000,
    gallery:{
      enabled: true
    },
    image: {
      titleSrc: function (item){
        return item.el.attr('captions');
      }
    },
  });
});
}




//- MEDIACULTURE BACGROUND VIDEO
function vegasBaground_mc(){
  $("#slider-video-mc").vegas({
      slides: [
          { src: "img/bg/1.jpg"},
          { src: "img/bg/2.jpg"},
          { src: "img/bg/3.jpg"},
          { src: "img/bg/4.jpg"},
          { src: "img/bg/5.jpg"},
          { src: "img/bg/6.jpg"},
        //     video:{
        //       src: [
        //         // 'http://dev2.slicejack.com/fullscreen-video-demo/video/big_buck_bunny.mp4',
        //         // 'http://vjs.zencdn.net/v/oceans.mp4',

              
        //       ],
        //       loop: true,
        //       mute: true,

        //     }
        // }
      ],
      transition: 'fade',
      animation: 'random',
      timer: true,
      // overlay: 'frameworks/vegas/overlays/01.png',
  });
  
}

//- ABOUT COLLAPSE BUTTON
function collpasea_button(){
  $('#more').click(function() {
      $('.morepara').slideToggle('slow');
      return false;
    });
    $('#close-up').click(function() {
      $('.morepara').slideUp('fast');
      return false;
    });
  
}