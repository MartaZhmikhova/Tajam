

$(document).ready(function(){

   //scrol
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });



    //burger
    $(".burger").click(function(){
        $(this).next().slideToggle();
    });

    $('.burger').click(function(){
        $(this).toggleClass('open');
    });

    //carousel
    $(".header_carousel").owlCarousel({
        items: 1,
        dots: true
    });
    $(".comments_carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right"></i>']
    });

    /*$(".owl-carousel").owlCarousel({

        items: 1,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right"></i>']

    });*/
    //owl-carousel comments
        dotcount = 1;
        jQuery('.owl-dot').each(function() {
            jQuery( this ).addClass( 'dotnumber' + dotcount);
            jQuery( this ).attr('data-info', dotcount);
            dotcount=dotcount+1;
        });
        slidecount = 1;
        jQuery('.owl-item').not('.cloned').each(function() {
            jQuery( this ).addClass( 'slidenumber' + slidecount);
            slidecount=slidecount+1;
        });
        jQuery('.owl-dot').each(function() {
            grab = jQuery(this).data('info');
            slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
            console.log(slidegrab);
            jQuery(this).css("background-image", "url("+slidegrab+")");
        });
         amount = jQuery('.owl-dot').length;
        gotowidth = 100/amount;

});
