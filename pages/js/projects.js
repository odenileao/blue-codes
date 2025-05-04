

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






/* -- FLICKTY CAROUSEL -- */

(function($){

    $(document).ready(function(){
        $('.container-slides').flickity({
            cellAlign: 'left',
            wrapAround: false
        });
    });

})(jQuery)







/* -- READING PAGE READ MODE -- */
  $(document).ready(function () {
            let isDown = false;
            let startX;
            let scrollLeft;

            const reader = $(".page-container");

            reader.on("mousedown", function (e) {
                isDown = true;
                reader.css("cursor", "grabbing");
                startX = e.pageX - reader.offset().left;
                scrollLeft = reader.scrollLeft();
            });

            reader.on("mouseleave mouseup", function () {
                isDown = false;
                reader.css("cursor", "grab");
            });

            reader.on("mousemove", function (e) {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - reader.offset().left;
                const walk = (x - startX) * 2; // Ajuste a sensibilidade do arrasto
                reader.scrollLeft(scrollLeft - walk);
            });
        });




$(document).ready(function () {
  const space = 18;
  const unspace = 0;

  $('#midspace').on('click', function () {
    let page = parseInt($('.page').css('margin-right'));
    if (page > unspace) {
      $('.page').css('margin-right', (page - space) + 'px');
    } else {
      $('.page').css('margin-right', (page = space) + 'px');
    }
  });

 
});
