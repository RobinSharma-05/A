

setTimeout(() => {
    const box = document.getElementById("box");

    box.style.display = "none";

    document.body.classList.remove("overflow-hidden");
}, 1000);




$(".slick-slider").slick({
    slidesToShow: 6,
    cssEase: 'linear',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});


$(".slick-slider-2").slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    vertical: true,
});
// centerPadding: '60px',
// verticalSwiping: true,
// swipeToSlide: true,
// focusOnSelect: true,

// /////////back to top///////////////
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

