$(document).ready(function () {
    /* плавная прокрутка меню */
    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        return false;
    });
    /* мобильное меню */
    
});