$(document).on('DOMContentLoaded', () => {

    //  show menu on burger click

    $('.burger').click( function(){
        $('.menu').toggleClass('show-menu');
    });

    // burger-animation

    $('.burger').click( function(){
        $('.burger__item').toggleClass('cross');

        // menu elements animation
        $('.menu__item').each(function(index){
            $(this).delay(300*index).fadeIn().animate({opacity:'1', marginLeft:'0'});

        })
    });

    // toggle more information in about section

    $('.description__btn').click(function(){
        $(this).parent().find('.description__read-more').slideToggle(500);
        $(this).text(function(i, text){
            return text === "Read More" ? "Read Less" : "Read More";
        })
    });

    // scroll To plugin

    jQuery(function($){

        // hide menu after click any menu item
        $('.menu__item').click(function(){
            $('.menu').toggleClass('show-menu');
            $('.burger__item').toggleClass('cross');
        });

        // scroll to home section
        $('#homeLink').click(function(){
            $.scrollTo($('#banner'), 500); 
        });

        // scroll to home section
        $('#aboutLink').click(function(){
            $.scrollTo($('#about'), 700);
        });

        // scroll to home section
        $('#projectsLink').click(function(){
            $.scrollTo($('#projects'), 1000);
        });

        // scroll to home section
        $('#contactLink').click(function(){
            $.scrollTo($('#contact'), 1200);   
        });
    });

    $('.project__info').click( function(){
        $(this).parent().find('.overlay').toggleClass('show-project-details');
    });
});