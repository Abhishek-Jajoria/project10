$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 50){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // -----------SLIDE-UP------------
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop : 0}, 0.01);
    });

    // -------TOGGLE MENU / NAVBAR SCRIPT ------
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // ------------TYPING ANIMATION------------
    var typed = new Typed(".typing",{
        strings: ["Front-end Developer", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Front-End Developer", "Web Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    // ------------OWL CAROUSEL SCRIPT-------------
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }
        }

    });
});