$(document).ready(function () {
    // เปลี่ยนสีพื้นหลังเมื่อ Scroll มาถึงแต่ละ Section
    $(window).on("scroll", function () {
        $(".section").each(function () {
            let position = $(this).offset().top - $(window).scrollTop();
            let windowHeight = $(window).height();

            if (position < windowHeight / 3 && position > -$(this).height() / 3) {
                let newColor = $(this).attr("id") === "Homes" ? "#ffe4a1" :
                               $(this).attr("id") === "About" ? "#f8d7da" :
                               $(this).attr("id") === "experience" ? "#cce5ff" :
                               $(this).attr("id") === "contact" ? "#d4edda" :
                               "#d4edda";

                $("body").css("background", newColor);
            }
        });
    });

    // Smooth Scroll เมื่อคลิกที่เมนู
    $('.navigation a').on('click', function (event) {
        event.preventDefault();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});
