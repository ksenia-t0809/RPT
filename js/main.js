$(document).ready(function(){
    // Header Nav
    $('.header .menu-btn').on('click', function(e){
        $('header').toggleClass('menu-open');
        e.preventDefault();
    })

    $('.header .has-sub-menu').on('click', function(e){
        $(this).toggleClass('sub-menu-open');
        e.preventDefault();
    })

    // Footer Mobile
    $('.footer .nav-col .footer-nav-link').on('click', function(e){
        $('.footer .footer-nav-link').removeClass('active');
        $('.footer .nav-col ul').removeClass('footer-menu-open');
        $(this).addClass('active');
        $(this).siblings('ul').addClass('footer-menu-open');
        e.preventDefault();
    })

    // Hero Slider
    $('.section-hero .owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1
            }
        }
    })

    // Companies Slider
    if ($(window).width() < 992) {
        $('.section-companies .owl-carousel').owlCarousel({
            loop:false,
            margin:0,
            nav:false,
            dots: true,
            responsive:{
                0:{
                    items:1
                }
            }
        })
    }
    $(window).resize(function() {
        if ($(window).width() < 992) {
            $('.section-companies .owl-carousel').owlCarousel({
                loop:false,
                margin:0,
                nav:false,
                dots: true,
                responsive:{
                    0:{
                        items:1
                    }
                }
            })
        }
    });

    // Slider Images
    $('.slider-images.owl-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots: true,
        responsive:{
            0:{
                items:1
            }
        }
    })
      
    
})