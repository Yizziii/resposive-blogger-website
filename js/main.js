const resposive=

$(document).ready(function(){

    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /** Click events on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        dots:false,
        nav:true,
        navtext:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        resposive:resposive
    });

    //click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000);
    })
    
}); 