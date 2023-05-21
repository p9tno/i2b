$(document).ready(function() {

    const licenses = new Swiper('.swiper_licenses_js', {
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        loop: true,

        mousewheel: {
            invert: false,
            forceToAxis: true,
        },

        navigation: {
            nextEl: '.system__arrows > .icon_arrow_right',
            prevEl: '.system__arrows > .icon_arrow_left',
        },

        pagination: {
            el: '.licenses_dotted_js',
            // clickable: true,
        },

        slidesPerView: 2,
        spaceBetween: 25,

        breakpoints: {
            767: {
                spaceBetween: 0,
                slidesPerView: 1,


                // freeMode: true,
                // watchSlidesProgress: true,
            },

        },

        on: {
            init: function (e) {
                // console.log('swiper initialized');
                // console.log(e.slides.length);
                console.log(e.pagination.bullets.length);

                $('.fraction_current_js').text(e.realIndex + 1);
                $('.fraction_all_js').text(e.pagination.bullets.length);
            },
        },

    });


    licenses.on('slideChange', function (e) {
        let currentSlide = e.realIndex;
        // console.log(currentSlide);
        $('.fraction_current_js').text(currentSlide + 1);


        let currentItem = $('.system__label').find(`[data-index='${currentSlide}']`);

        $('.system__el').removeClass('active');
        currentItem.addClass('active');
        // $('.system__el').removeClass('active');
        // currentItem.addClass('active');
    });


    function mobilSlider () {
        let business_slider = null;
        let singlepage_slider = null;
        let mediaQuerySize = 1365;

        function initSlider () {
            if (!business_slider) {
                business_slider = new Swiper('.swiper_business_js', {
                    speed: 500,
                    autoplay: {
                        delay: 5000,
                    },
                    loop: true,
                    mousewheel: {
                        invert: false,
                        forceToAxis: true,
                    },
                    pagination: {
                        el: '.business_dotted_js',
                    },
                    slidesPerView: 2,
                    spaceBetween: 15,
                    breakpoints: {
                        767: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                    },
                });
            }

            if (!singlepage_slider) {
                singlepage_slider = new Swiper('.swiper_singlepage_js', {
                    speed: 500,
                    autoplay: {
                        delay: 5000,
                    },
                    loop: true,
                    mousewheel: {
                        invert: false,
                        forceToAxis: true,
                    },
                    pagination: {
                        el: '.singlepage_dotted_js',
                    },
                    slidesPerView: 2,
                    spaceBetween: 15,
                    breakpoints: {
                        767: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    },

                });
            }
        }

        function destroySlider () {
            if (business_slider) {
                business_slider.destroy();
                business_slider = null;
            }

            if (singlepage_slider) {
                singlepage_slider.destroy();
                singlepage_slider = null;
            }
        }

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
            if (windowWidth <= mediaQuerySize) {
                initSlider();
                console.log('init');
            } else {
                destroySlider();
                console.log('destroy');
            }
        });
    }
    mobilSlider();


    const news = new Swiper('.swiper_news_js', {
        slidesPerView: 2,
        spaceBetween: 25,
        speed: 500,
        loop: true,
        autoplay: {
          delay: 5000,
        },

        navigation: {
            nextEl: '.news__arrows > .icon_arrow_right',
            prevEl: '.news__arrows > .icon_arrow_left',
        },
        pagination: {
            el: '.news_dotted_js',
            clickable: true,
        },

        breakpoints: {
            767: {
                spaceBetween: 15,
                slidesPerView: 3,
            },
            1920: {
                spaceBetween: 30,
                slidesPerView: 4,
            },

        },


    });

});
