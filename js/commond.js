

$(document).ready(function(){
    //scrol
    $("ul").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
   $(".button").click(function(event){
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $("html, body").animate({
            scrollTop: top}, 800);
    });

    //modal window
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
    $('.js-close-campaign').click(function() {
        $('.js-overlay-campaign').fadeOut();

    });
    $(document).mouseup(function (e) {
        var popup = $('.js-popup-campaign');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-campaign').fadeOut();

        }
    });
    $(window).on('load', function () {
        setTimeout(function(){
            if($('.js-overlay-campaign').hasClass('disabled')) {
                return false;
            } else {

                $(".js-overlay-campaign").fadeIn();
            }
        }, 10000);
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
        dots: true,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed: 1500,
        autoplayHoverPause:true
    });

    $(".comments_carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        autoplayHoverPause: false,
        navText: ['<i class="fa fa-angle-left" ></i>','<i class="fa fa-angle-right"></i>']
    });

  /*  //owl-carousel comments
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
*/
    $( ".form_message" ).submit(function( event ) {
        $('.thank-you-message').css('display', 'block');
        this.reset();
        event.preventDefault();
    });
    $( ".letter" ).submit(function( event ) {
        $('.thank-you-message2').css('display', 'block');
        this.reset();
        event.preventDefault();
    });
});
