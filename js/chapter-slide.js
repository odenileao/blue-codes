/**
 * ADEA Extreme Jquery and Pure Javascript Codes 
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

 



/* -- FLICKITY CAROUSEL -- */

(function($){

    $(document).ready(function(){
        $('.container-slides').flickity({
            cellAlign: 'left'
        });
    });

})(jQuery)




