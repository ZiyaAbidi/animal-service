/*========================================================================================================
================================ humburger-menu ===================================================================
===========================================================================================================*/

$(function () {
    $('.hamburger').on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("is-active");

        //$(".main-menu").toggleClass("show-menu");
        $(".right-section").toggleClass("navebar-show");

        $(".left-section").toggleClass("navebar-show");

        setTimeout(function () {
            $('body').toggleClass("hiddenOverflow");
        }, 300);

    });

    var nav_menu = $('.navbar-menu a');
    nav_menu.on('mouseover', function () {
        $(this).parent().siblings().not(this).addClass("opacity-custom");
    });
    nav_menu.on('mouseout', function () {
        $(this).parent().siblings().not(this).removeClass("opacity-custom");
    });
});

/*=====================================================================
    ==========================  03-ScrollToptoBottom  =========================
    ========================================================================*/
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function () {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
});


/*========================================================================================================
================================ pensions_carousel ===================================================================
===========================================================================================================*/

$('#pensions_carousel').owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive: {
        0: {
            items: 1,
            stagePadding: 15,
            nav: false,
        },
        767: {
            dots: false,
        }
    }
});

/*========================================================================================================
================================ decouvrez_carousel ===================================================================
===========================================================================================================*/

$('#decouvrez_carousel, #decouvrez_carousel2').owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive: {
        0: {
            items: 1,
            stagePadding: 15,
            nav: false,
        },
        767: {
            dots: false,
        }
    }
});

/*========================================================================================================
================================ notre_carousel ===================================================================
===========================================================================================================*/

$('#notre_carousel').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive: {
        0: {
            nav: false,
        },

        // breakpoint from 767 up
        767: {
            dots: false
        }
    }
});


/*========================================================================================================
================================ main_slider ===================================================================
===========================================================================================================*/

$('#main_slider').owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    autoplay: false,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive: {
        0: {
            nav: false,
        },
        // breakpoint from 767 up
        767: {
            dots: true
        }
    }
});

/*========================================================================================================
================================ Custom Radio button ===================================================================
===========================================================================================================*/

$('input:radio').click(function () {
    $('input:radio').parent().removeClass('checked');
    $(this).parent(this).addClass('checked');
});

/*========================================================================================================
================================ main_slider ===================================================================
===========================================================================================================*/

$(function() {

    $('.dropdown-toggle').on('click', function(event) {
        $('.dropdown-menu').slideToggle();
        event.stopPropagation();
    });

    $('.dropdown-menu').on('click', function(event) {
        event.stopPropagation();
    });

    $(window).on('click', function() {
        $('.dropdown-menu').slideUp();
    });

});


/*========================================================================================================
================================ coups_de_cour ===================================================================
===========================================================================================================*/

$('#coups_de_cour').owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    autoplay: false,
    margin: 5,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive: {
        0: {
            items: 1,
            stagePadding: 5,
            nav: false,
            margin: 15,
        },
        767: {
            dots: false,
        }
    }
});


/*========================================================================================================
================================ promotion_jour ===================================================================
===========================================================================================================*/

$('#promotion_jour').owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    autoplay: false,
    margin: 15,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive: {
        0: {
            items: 1,
            stagePadding: 5,
            nav: false,
            margin: 15,
        },
        767: {
            dots: false,
        }
    }
});

/*========================================================================================================
================================ nos_categories ===================================================================
===========================================================================================================*/

$('#nos_categories').owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    autoplay: false,
    margin: 15,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    responsive: {
        0: {
            items: 1,
            stagePadding: 5,
            nav: false,
            margin: 15,
        },
        767: {
            dots: false,
        }
    }
});

/*=====================================================================
==========================  catMenu-slider  =========================
========================================================================*/
$('#catMenu-slider').owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    navText: ["<img src='assets/img/left-red-icon.png' class='img-responsive' />", "<img src='assets/img/right-red-icon.png' class='img-responsive' />"],
    navClass: ['owl-prev', 'owl-next'],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        951: {
            items: 4
        },
        1265: {
            items: 5
        }
    }
});


/*=====================================================================
========================== Sharing on click show  =========================
========================================================================*/

$('.share-btn').click(function () {
    $('.sharing-modal').css('display','block');
    $('.sharing-icons').addClass('bounce');
});

$('.close-img').click(function () {
    $('.sharing-modal').css('display','none');
    $('.sharing-icons').removeClass('bounce');
});


/*=====================================================================
========================== Product-Slider-with-zoom  =========================
========================================================================*/
$(document).ready(function () {
    var bigimage = $(".big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: [
                '<img src="assets/img/left-red-icon.png" class="right-cirle-icon">',
                '<img src="assets/img/right-red-icon.png" class="right-cirle-icon">'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 4,
            dots: false,
            nav: true,
            navText: [
                '<img src="assets/img/left-red-icon.png" class="right-cirle-icon">',
                '<img src="assets/img/right-red-icon.png" class="right-cirle-icon">'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 1,
            responsiveRefreshRate: 100,
            responsive: {
                0: {
                    items: 2
                },
                767: {
                    items: 3
                },
                951: {
                    items: 4
                }
            }
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
});
