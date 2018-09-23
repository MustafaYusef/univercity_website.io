$(function (){
    'use strict';
    //adjust slider
    var winh=$(window).height(),
    upperh=$('.upperheader').innerHeight(),
    navrh=$('.navbar').innerHeight();
    $('.slid ,.carousel-item').height(winh-(upperh+navrh));



    //shufful work
    $(' .future ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === '.All'){
            $('.shuffell  .col-md').css('opacity',1);
        }
        else{
            $('.shuffell  .col-md').css('opacity',.07);
            $($(this).data('class')).parent() .css('opacity',1);
        }


    });


    //fixed navbare
    $(window).scroll(function(){
        var navbar=$(".navbar");
        var upper=$('.upperheader');
      if($(window).scrollTop() >=navbar.height()+upper.height()){
        if(!navbar.hasClass("fixed-top")){
        navbar.addClass('fixed-top');
          navbar.addClass('scrolled');}
      } else if(navbar.hasClass("fixed-top")){

          navbar.removeClass('scrolled');
          navbar.removeClass('fixed-top');
      }

    //scrool to top
    var scroll=$(".scroll-top");
    if($(window).scrollTop() >= 800){
        if(scroll.is(':hidden')){
            scroll.fadeIn(500);
        }
        
       
    }
    else{
        scroll.fadeOut(700);
    }

    });

// to top
 $('.scroll-top').click(function(event){
            event.preventDefault();

            $('html,body').animate({
                scrollTop:0
            },1000)
 });
    
});