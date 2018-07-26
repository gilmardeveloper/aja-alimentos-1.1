$(document).ready(function () {

    /*----------------------------------
        Slider
    -----------------------------------*/
    $('.slider-active').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*----------------------------------
        timeline-active
    -----------------------------------*/
    $('.timeline-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*----------------------------------
        upcomming-active
    -----------------------------------*/
    $('.upcomming-active').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /*----------------------------
      MagnificPopup
    ------------------------------ */
    $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /*----------------------------
      MagnificPopup
    ------------------------------ */
    $('.image-gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /*----------------------------
      MagnificPopup
    ------------------------------ */
    $('.latest_blog-active').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});