/**
 * ADEA Extreme Jquery and Pure Javascript Codes 
 */


        



        $(document).ready(function () {
            // Abrir modal
            $('#flag').click(function () {
                $('.modal-blur, .lang-modal').fadeIn();
                $('.lang-modal').animate({top:'30%'}, "slow");
            });

            // Fechar modal
            $('.modal-blur').click(function () {
                $('.modal-blur, .lang-modal').fadeOut();
            });

            // Evitar scrolling no fundo
            $('.modal-blur').click(function () {
                $('.modal-blur, .lang-modal').fadeOut();
            });
        });






      $(document).ready(function () {
            // Abrir modal
            $('#actState').click(function () {
                $('.modal-blur, #accountState').fadeIn();
                $('.lang-modal').animate({top:'30%'}, "slow");
            });

            // Fechar modal
            $('.modal-blur').click(function () {
                $('.modal-blur, #accountState').fadeOut();
            });

            // Evitar scrolling no fundo
            $('.modal-blur').click(function () {
                $('.modal-blur, #accountState').fadeOut();
            });
        });





/*
    $(document).ready(function () {
        $('.legimg').mouseover(function () {
            $('#legilogo').fadeIn();
        });

        $('.legimg').mouseleave(function () {
            $('#legilogo').fadeOut();
        });
    });

*/











$(document).ready(function(){
    $("#modal-active").click(function(){
        $(".modal").fadeIn();
    });
    
    $("#close").click(function(){
        $(".modal").fadeOut();
    });
});


$(document).ready(function(){
    $("#modal-active").click(function(){
        $("#modal-bg").show();
    });

    $("#close").click(function(){
        $("#modal-bg").hide();
    });
});

$(document).ready(function(){
    $(".user").click(function(){
        $(".user-menu").fadeToggle();
    });
});







/* -- FAQ Slide Toggle -- */

$(document).ready(function(){
    $("#qst").click(function(){
        $("#q1").slideToggle();
    });

    $("#qnd").click(function(){
        $("#q2").slideToggle();
    });

    $("#qrd").click(function(){
        $("#q3").slideToggle();
    });

    $("#qth").click(function(){
        $("#q4").slideToggle();
    });

    $("#qth1").click(function(){
        $("#q5").slideToggle();
    });

    $("#qth2").click(function(){
        $("#q6").slideToggle();
    });
});






/* -- Character Aside Slide Toggle -- */

$(document).ready(function(){
    $('.cslide').click(function(){
        $(".char-panel").slideToggle();
        $("#char-modalbg").fadeIn();
    });
});
  
/** Slide de Painel de Personagens */
$(document).ready(function(){
    $(".cp-close").click(function(){
        $(".char-panel").slideToggle();
        $("#char-modalbg").fadeOut();
    });
});


/** Slide de Ero Books */
$(document).ready(function(){
    $("#eroAcess").click(function(){
        $(".eromodal").slideToggle();
        $("#erobg").fadeIn();
    });
});

/** Slide de Ero Books */
$(document).ready(function(){
    $("#eroex").click(function(){
        $(".eromodal").slideToggle();
        $("#erobg").fadeOut();
    });
});



/* -- FLICKTY CAROUSEL -- */

(function($){

    $(document).ready(function(){
        $('.container-slides').flickity({
            cellAlign: 'left',
            wrapAround: true
        });
    });

})(jQuery)

 

 

/*-- BANNER SLIDE SHOW --*/
$(document).ready(function(){
	$('#slides').slidesjs({
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
      });
});




/** EXTREME BOX STATUS */ 
$(document).ready(function(){
    $("#box-btn").click(function(){
        $(".extreme-box").fadeToggle();
    });
});




/** ADEA EDITORA BUTTON TOOLTIP */ 
$(document).ready(function(){
    $("#amax-btn").mouseover(function(){
        $(".tooltip-text").fadeIn();
    });

    $("#amax-btn").mouseout(function(){
        $(".tooltip-text").fadeOut();
    });
});

/** CHARBOOK BUTTON TOOLTIP */
$(document).ready(function(){
    $("#charbuy").mouseover(function(){
        $(".tooltip-text").fadeIn();
    });

    $("#charbuy").mouseout(function(){
        $(".tooltip-text").fadeOut();
    });
});





/* ---- User Profile Menus ----- */ 

/** Profile */ 
$(document).ready(function(){
    $("#profile-btn").click(function(){
        $("#profile").fadeIn();
        $("#library").fadeOut();
        $("#notify").fadeOut();
        $("#setting").fadeOut();
        $("#account").fadeOut();
        $("#warning").fadeOut();
    });
});



/** Library */ 
$(document).ready(function(){
    $("#library-btn").click(function(){
        $("#library").fadeIn();
        $("#profile").fadeOut();
        $("#notify").fadeOut();
        $("#setting").fadeOut();
        $("#account").fadeOut();
        $("#warning").fadeOut();
    });
});

/** Notification */ 
$(document).ready(function(){
    $("#notify-btn").click(function(){
        $("#notify").fadeIn();
        $("#profile").fadeOut();
        $("#library").fadeOut();
        $("#setting").fadeOut();
        $("#account").fadeOut();
        $("#warning").fadeOut();
    });
});


/** Setting */ 
$(document).ready(function(){
    $("#setting-btn").click(function(){
        $("#setting").fadeIn();
        $("#profile").fadeOut();
        $("#library").fadeOut();
        $("#account").fadeOut();
        $("#warning").fadeOut();
        $("#notify").fadeOut();
    });
});


/** Account State */ 
$(document).ready(function(){
    $("#account-btn").click(function(){
        $("#account").fadeIn();
        $("#profile").fadeOut();
        $("#library").fadeOut();
        $("#setting").fadeOut();
        $("#warning").fadeOut();
        $("#notify").fadeOut();
    });
});


/** Warning */ 
$(document).ready(function(){
    $("#warning-btn").click(function(){
        $("#warning").fadeIn();
        $("#profile").fadeOut();
        $("#library").fadeOut();
        $("#account").fadeOut();
        $("#notify").fadeOut();
        $("#setting").fadeOut();
    });
});











/** PAYMENT FORM SLIDES */ 

$(document).ready(function(){
    $("#paypaldiv").click(function(){
        $("#pb-paypalslide").fadeIn();
    });

    $("#cardsdiv").click(function(){
        $("#pb-paypalslide").fadeOut();
    }); 
});


$(document).ready(function(){
    $("#promoclose").click(function(){
        $("#promo-modal").fadeOut();
        $("#promobg").fadeOut();
    });
});


$(document).ready(function(){
    $("#promo").click(function(){
        $("#promo-modal").fadeIn();
        $("#promobg").fadeIn();
    });
});
 







/* -- FADE-IN-ELEMENTS INDEX SCROLL -- */

$(document).ready(function(){
   function checkFadeIn() {
    $('.offer-hq').each(function(){
        var elementPosition = $(this).offset().top;
        var windowButton = $(window).scrollTop() + $(window).height();

        if (elementPosition < windowButton - 50) {
            $(this).css({
                'opacity': '1'
            });
        }
    })
   }

   $(window).on('scroll', function() {
        checkFadeIn();
    });

});
 


$(document).ready(function(){
   function checkFadeIn() {
    $('.recom-hq').each(function(){
        var elementPosition = $(this).offset().top;
        var windowButton = $(window).scrollTop() + $(window).height();

        if (elementPosition < windowButton - 50) {
            $(this).css({
                'opacity': '1'
            });
        }
    })
   }

   $(window).on('scroll', function() {
        checkFadeIn();
    });

});
 


/* -- MEET CHARACTERS -- */
$(document).ready(function(){
   function checkFadeIn() {
    $('.best-div').each(function(){
        var elementPosition = $(this).offset().top;
        var windowButton = $(window).scrollTop() + $(window).height();

        if (elementPosition < windowButton - 50) {
            $(this).css({
                'opacity': '1'
            });
        }
    })
   }

   $(window).on('scroll', function() {
        checkFadeIn();
    });

});
 