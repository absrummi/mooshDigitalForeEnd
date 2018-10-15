$(document).ready(function() {
   
    /* ======= Owl Carousel ======= */    
    /* Ref: http://owlgraphic.com/owlcarousel/index.html */

    $("#work-carousel").owlCarousel({
                
        autoplay:true,       
        autoPlayTimeout : 6000,
        smartSpeed : 400,
        autoplayHoverPause:true,
        items: 1,
        autoHeight : true,
        loop: true
        
    });

});