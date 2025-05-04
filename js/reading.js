
/* -- FLICKTY CAROUSEL -- 

(function($){

    $(document).ready(function(){
        $('.container-slides').flickity({
            cellAlign: 'center',
            wrapAround: false
        });
    });

})(jQuery) 
*/








/* -- READING PAGE ZOOM -- */

$(document).ready(function () {
  const minWidth = 720;
  const maxWidth = 1040;
  const step = 80;

  $('#zoom-in').on('click', function () {
    let currentWidth = parseInt($('.page-cont').css('max-width'));
    if (currentWidth < maxWidth) {
      $('.page-cont').css('max-width', (currentWidth + step) + 'px');
    }
  });

  $('#zoom-out').on('click', function () {
    let currentWidth = parseInt($('.page-cont').css('max-width'));
    if (currentWidth > minWidth) {
      $('.page-cont').css('max-width', (currentWidth - step) + 'px');
    }
  });
});


/* -- EXPAND BUTTON ON READING PAGE -- */


$(document).ready(function() {
            $("#toggle-menu").click(function() {
                $("#menu").toggleClass("active");
            });
        });
