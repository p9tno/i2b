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
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

        pagination: {
            el: '.swiper__dotted',
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
        let mediaQuerySize = 767;

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
                        el: '.swiper__dotted',
                    },
                    slidesPerView: 2,
                    spaceBetween: 15,
                    breakpoints: {
                        767: {
                            slidesPerView: 1,
                            spaceBetween: 15,
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


    // const certificate = new Swiper('.certificate-swiper-js', {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //     speed: 500,
    //     loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.certificate__dotted',
    //         clickable: true,
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             spaceBetween: 24,
    //             slidesPerView: 3,
    //         },
    //
    //     }
    // });
    //
    // const ourhouses = new Swiper('.ourhouses-swiper-js', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     speed: 500,
    //     loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.ourhouses__arrows .icon_arrow_right',
    //         prevEl: '.ourhouses__arrows .icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.ourhouses__dotted',
    //         clickable: true,
    //     },
    //     initialSlide: 0,
    //
    //
    //
    //     breakpoints: {
    //         768: {
    //             spaceBetween: 27,
    //             slidesPerView: 4,
    //         },
    //
    //     }
    // });
    //
    // const data = new Swiper('.data-swiper-js', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     speed: 500,
    //     // loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.data__dotted',
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             spaceBetween: 80,
    //             slidesPerView: 3,
    //         },
    //
    //     }
    // });
    //
    // const teamImgSlider = new Swiper('.teamImgSlider-swiper-js', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     speed: 500,
    //     loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.teamImgSlider__dotted',
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             spaceBetween: 74,
    //             slidesPerView: 3,
    //         },
    //
    //     }
    // });
    //
    // const blog = new Swiper('.blog-swiper-js', {
    //     slidesPerView: 1,
    //     speed: 500,
    //     loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.blog__dotted',
    //         // clickable: true,
    //     },
    //
    //     spaceBetween: 10,
    //
    //     breakpoints: {
    //         768: {
    //             spaceBetween: 42,
    //             slidesPerView: 2,
    //         },
    //
    //     }
    // });
    //
    // const singleSlider = new Swiper('.single-swiper-js', {
    //     slidesPerView: 1,
    //     speed: 500,
    //     // loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.singleSlider__dotted',
    //         clickable: true,
    //     },
    //
    // });
    //
    // const largeSlider = new Swiper('.largeSlider-swiper-js', {
    //     slidesPerView: 1,
    //     speed: 500,
    //     // loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //     loop: true,
    //     effect: "fade",
    //     fadeEffect: {
    //       crossFade: true
    //     },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.largeSlider__dotted',
    //         clickable: true,
    //     },
    //
    // });
    //
    // // BEGIN TEAM
    // const teamSlider = new Swiper('.team-swiper-js', {
    //     slidesPerView: 2,
    //     speed: 500,
    //     loop: true,
    //     // centeredSlides: true,
    //     freeMode: true,
    //     watchSlidesProgress: true,
    //
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 4,
    //         },
    //     }
    // });
    //
    //
    // const teamPreview = new Swiper('.teamPreview-swiper-js', {
    //     slidesPerView: 1,
    //     speed: 500,
    //     loop: true,
    //     effect: "fade",
    //     fadeEffect: {
    //       crossFade: true
    //     },
    //
    //     allowTouchMove: false,
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.teamSlider__dotted',
    //         clickable: true,
    //     },
    //
    //     thumbs: {
    //         swiper: teamSlider,
    //     },
    //
    //     slideToClickedSlide: true,
    //     autoHeight: true,
    //
    // });
    // teamPreview.on('slideChange', function (e) {
    //     // console.log('slide changed');
    //     // console.log(e.activeIndex);
    // });
    //
    // // END TEAM
    //
    // const videoWork = new Swiper('.videoWork-swiper-js', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     speed: 500,
    //     loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.videoWork__dotted',
    //         clickable: true,
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 56,
    //         },
    //     }
    //
    // });
    //
    // const gifts = new Swiper('.gifts-swiper-js', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     speed: 500,
    //     loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.gifts__dotted',
    //         clickable: true,
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 40,
    //         },
    //     }
    //
    // });
    //
    // const stages = new Swiper('.stages-swiper-js', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     speed: 500,
    //     loop: true,
    //     // autoplay: {
    //     //   delay: 5000,
    //     // },
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //     pagination: {
    //         el: '.stages__dotted',
    //         clickable: true,
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 2,
    //             spaceBetween: 60,
    //         },
    //     }
    //
    // });
    //
    // const logos = new Swiper('.logos-swiper-js', {
    //     slidesPerView: 3,
    //     speed: 500,
    //     autoplay: {
    //       delay: 5000,
    //     },
    //
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 8,
    //         },
    //     }
    // });
    //
    // // logos.on('slideChange', function () {
    // //     console.log('slide changed');
    // //
    // //     let leftSlide = logos.activeIndex;
    // //     let rightSlide = logos.activeIndex + 2;
    // //     leftSlide.add('left_slide');
    // //     rightSlide.add('right_slide');
    // //
    // //     console.log(leftSlide);
    // //     console.log(rightSlide);
    // //     console.log(logos.activeIndex);
    // //     console.log(logos.$el);
    // // });
    //
    // // let activeSlide = swiper.activeIndex;
    //
    //
    // // BEGIN project
    // const project_sm = new Swiper(".project-swiper-sm-js", {
    //     spaceBetween: 6,
    //     slidesPerView: 2,
    //     // allowTouchMove: false,
    //     // clickable: false,
    //     centeredSlides: true,
    //     loop: true,
    //
    //
    //     freeMode: true,
    //     watchSlidesProgress: true,
    //
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 7,
    //             spaceBetween: 12,
    //             centeredSlides: false,
    //             // allowTouchMove: false,
    //         },
    //     }
    //
    // });
    //
    // const project = new Swiper(".project-swiper-js", {
    //     slidesPerView: 1,
    //     // allowTouchMove: false,
    //     loop: true,
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //
    //     pagination: {
    //         el: '.project__dotted',
    //     },
    //
    //     thumbs: {
    //         swiper: project_sm,
    //     },
    // });
    // // END project
    //
    // const otherProjects = new Swiper(".otherProjects-swiper-js", {
    //     slidesPerView: 1,
    //     allowTouchMove: false,
    //     loop: true,
    //
    //     navigation: {
    //         nextEl: '.icon_arrow_right',
    //         prevEl: '.icon_arrow_left',
    //     },
    //
    //     pagination: {
    //         el: '.otherProjects__dotted',
    //     },
    //
    //
    // });
    //
    //
    // function addSliders() {
    //
    //     let projects = $('.projects-swiper-js');
    //
    //     projects.each(function() {
    //         let options = $(this).data('options') || {};
    //         let $parent = $(this).parent();
    //         let swiperDefaults = {
    //
    //             loop: true,
    //             slidesPerView: 1,
    //             allowTouchMove: false,
    //
    //             pagination: {
    //                 el: $parent.find('.projects__dotted')[0],
    //             },
    //
    //             navigation: {
    //                 nextEl: $parent.find('.icon_arrow_right')[0],
    //                 prevEl: $parent.find('.icon_arrow_left')[0],
    //             },
    //
    //             thumbs: {
    //                 swiper: {
    //                     el: $parent.closest('.projects__item').find('.projects-swiper-sm-js')[0],
    //                     loop: true,
    //                     spaceBetween: 6,
    //                     slidesPerView: 2,
    //                     centeredSlides: true,
    //
    //                     freeMode: true,
    //                     watchSlidesProgress: true,
    //
    //                     breakpoints: {
    //                         768: {
    //                             spaceBetween: 15,
    //                             centeredSlides: false,
    //                         },
    //                     }
    //                 }
    //             },
    //
    //         };
    //
    //         let swiperOptions = $.extend(swiperDefaults, options),
    //         mySwiper = new Swiper(this, swiperOptions);
    //
    //         // console.log($parent);
    //         // console.log($parent.find('.projects__dotted')[0]);
    //         // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
    //     });
    //
    // }
    // addSliders();
    //
    // function addSteps() {
    //
    //     let steps = $('.steps-swiper-js');
    //
    //     steps.each(function() {
    //         let options = $(this).data('options') || {};
    //         let $parent = $(this).parent().parent();
    //         let swiperDefaults = {
    //
    //             slidesPerView: 1,
    //             spaceBetween: 10,
    //             speed: 500,
    //             loop: true,
    //
    //             pagination: {
    //                 el: $parent.find('.steps__dotted')[0],
    //             },
    //
    //             navigation: {
    //                 nextEl: $parent.find('.icon_arrow_right')[0],
    //                 prevEl: $parent.find('.icon_arrow_left')[0],
    //             },
    //
    //             breakpoints: {
    //                 768: {
    //                     slidesPerView: 3,
    //                     spaceBetween: 36,
    //                 },
    //             }
    //
    //
    //         };
    //
    //         let swiperOptions = $.extend(swiperDefaults, options),
    //         mySwiper = new Swiper(this, swiperOptions);
    //
    //         // console.log($parent);
    //         // console.log($parent.find('.steps__dotted')[0]);
    //         // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
    //     });
    //
    // }
    // addSteps();

});
