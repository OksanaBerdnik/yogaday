$(window).resize(function () {
    resizeImg();
});

function resizeImg() {
    if ($(window).width() >= 768) {
        $('.desktop.previous-marathon li').height($('.desktop.previous-marathon li').width());
    }
}

function windowScroll() {
    var height = $(window).height();
    if ($(window).scrollTop() > height) {
        $('header nav').addClass('scrolling');
        $('.go-up').fadeIn();
    }
    else  {
        $('header nav').removeClass('scrolling');
        $('.go-up').fadeOut();
    }
}

$(document).ready(function() {
    windowScroll();
    resizeImg();

    $('.carousel').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        adaptiveHeight: true,
        slidesToShow: 1
    });

    $('.burger').on('click', function () {
        $(this, '.mobile-menu').toggleClass('open-menu');
        $('.overlay').fadeToggle();
        $('.mobile-menu').slideToggle();
    });

    $('.overlay').on('click', function () {
        $('.mobile-menu, .burger').removeClass('open-menu');
        $('.overlay').fadeOut();
        $('.mobile-menu').slideUp();
    });

    $(".scroll_to_target").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        if ($(window).width() > 1023) {
            $('html, body').animate({scrollTop: $(target).offset().top - 92}, 1500);
        }
        else {
            $('html, body').animate({scrollTop: $(target).offset().top}, 1500);
        }
        return false;
    });

    $(".scroll_to_target_bounce").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });

    $('.go-up').on('click', function () {
        $( 'html, body' ).animate( { scrollTop: 0 }, 1500 );
    });

    $('.carousel-slide').on('click', function (e) {
        e.preventDefault();
    });

    $(window).scroll(function() {
        windowScroll();
    });

    $('.slick-prev').html('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider-arrow"></use></svg>');
    $('.slick-next').html('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slider-arrow"></use></svg>');

    $(".order-email").submit(function() {
        var form_data = $(this).serialize();
        $.ajax({
            type: "GET",
            url: "email_sender.php",
            data: form_data,
            success: function(responce) {
                $(this).find('.success').slideDown();
                $(this).find('input[type=text], input[type=email]').val();
            }
        });
        return false;
    });
});

function initMap() {

    var location = [
        ['Киев, Хрещатик, мэрия', 50.446306, 30.521063, 1],
        ['3', -34.028249, 151.157507, 2]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(50.450181, 30.523373),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    for (var i = 0; i < location.length; i++) {

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(location[i][1], location[i][2]),
            map: map,
            title: location[i][0]
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(location[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

(function(){
    var widget_id = 'WweREiif31';
    var d=document;var w=window;
    function l(){
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = '//code.jivosite.com/script/widget/'+widget_id;
        var ss = document.getElementsByTagName('script')[0];
        ss.parentNode.insertBefore(s, ss);
    }
    if(d.readyState=='complete') {
        l();
    }
    else{
        if(w.attachEvent){
            w.attachEvent('onload',l);
        }
        else{
            w.addEventListener('load',l,false);
        }
    }
})();