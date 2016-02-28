$(document).ready(function(){
    // Dropdown
    $('.cart .icon').click(function() {
        $('.cart.dropdown').toggleClass('open');
        $(document).click(function(event) {
            if ($(event.target).closest('.cart .icon').length) return;
            $('.cart.dropdown').removeClass('open');
            event.stopPropagation();
        });
    });

    $('.search .icon').click(function() {
        $('.search.dropdown').toggleClass('open');
        $(document).click(function(event) {
            if ($(event.target).closest('.search .icon').length) return;
            $('.search.dropdown').removeClass('open');
            event.stopPropagation();
        });
    });

    $('.settings .icon').click(function() {
        $('.settings.dropdown').toggleClass('open');
        $(document).click(function(event) {
            if ($(event.target).closest('.settings .icon').length) return;
            $('.settings.dropdown').removeClass('open');
            event.stopPropagation();
        });
    });


    // Tabs
    $('.requests .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.requests.tab_content').addClass('on');
    });

    $('.themes .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.themes.tab_content').addClass('on');
    });

    $('.number .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.number.tab_content').addClass('on');
    });

    $('.paragraph .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.paragraph.tab_content').addClass('on');
    });

    $('.approved .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.approved.tab_content').addClass('on');
    });

    $('.posted .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.posted.tab_content').addClass('on');
    });

    $('.specification .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.specification.tab_content').addClass('on');
    });

    $('.spent .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.spent.tab_content').addClass('on');
    });

    $('.hold .content').click(function() {
        $('.content').removeClass('active');
        $(this).toggleClass('active');
        $('.tab_content').removeClass('on');
        $('.hold.tab_content').addClass('on');
    });
});

