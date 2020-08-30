$(document).ready(function(){
   
    //sticky navigation
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px'
    });
    //scroll to section
    $('.js--scroll-to-plan').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},100);
    })
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},100)
    })
    

    //animation on scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    })
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp')
    },{
        offset: '50%'
    })
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInRight')
    },{
        offset: '50%'
    })
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeInLeft')
    },{
        offset: '50%'
    })
    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animated pulse')
    },{
        offset: '50%'
    })

    //reponsive navigation
    $('.js--nav-icon').click(function(){
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon')

        nav.slideToggle(200);
        if(icon.hasClass('fa-bars')){
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        }
        else{
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }

    })
});