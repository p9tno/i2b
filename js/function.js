var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    touchDevice: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i );
    }
};

function isLgWidth() {
    return $( window ).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $( window ).width() >= app.mdWidth && $( window ).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $( window ).width() >= app.smWidth && $( window ).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $( window ).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device

window.onload = function () {
    console.log('onload');
    $('.animate-js').removeClass('aos-animate')
    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },1000);
                $('.animate-js').addClass('aos-animate');

            },1000);
        });
    }
    preloader();

    // setTimeout( ()=> preloader(),15000 )
}

$(document).ready(function() {
    console.log('ready');

    function toggleNav() {
        $('.toggle').click(function() {
            let toggle = $('.toggle__button');
            let content = $('.header__nav');
            let close = $('.navbar__close');

            $( 'body' ).addClass( 'nav-open' );
            content.addClass('active');

            close.click(function () {
                content.removeClass('active');
                $( 'body' ).removeClass( 'nav-open' );
            })

        });
    };
    toggleNav();

    function showModal() {
        $('.show_modal_js').on('click', function (e) {
            e.preventDefault();
            let id  = $(this).attr('href');
            $(id).modal('show');
        });

        $('.modal').on('show.bs.modal', () => {
            // let openedModal = $('.modal.in:not(.popapCalc)');
            let openedModal = $('.modal');
            if (openedModal.length > 0) {
                openedModal.modal('hide');
            }
        });
    }
    showModal();

    $(function(){
        $(".tel").mask("+7 ( 999 ) 999 - 99 - 99");
    });



    function addDataFancybox() {
        let item = $('.itemForDataFancybox_js');
        let num = 0;
        item.each(function(index, el) {
            $(this).find('a').attr('data-fancybox', num);
            num++;
        });
    }
    addDataFancybox();

    $('[data-fancybox]').fancybox({
        loop: true,
        autoFocus: false,
        arrows: true,
        toolbar: true,
        buttons: [
           // "zoom",
           //"share",
           // "slideShow",
           //"fullScreen",
           //"download",
           // "thumbs",
           "close"
        ],
    });

    function initAOS () {
        // https://github.com/michalsnik/aos
        AOS.init({
            disable: 'mobile',
            // anchorPlacement: 'bottom-bottom',
            duration: 1000, // values from 0 to 3000, with step 50ms
            // offset: 20,
            once: true,
        });

        AOS.init({
            disable: function () {
                var maxWidth = 1365;
                return window.innerWidth < maxWidth;
            }
        });

    }
    initAOS ();

})
