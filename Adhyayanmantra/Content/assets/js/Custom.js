$('.open-menus').on('click', function (e) {
    alert(1);
    console.log("abcs")
    e.preventDefault();
    $('.sidebar').addClass('active');
    $('.overlay').addClass('active');
    // close opened sub-menus
    $('.collapse.show').toggleClass('show');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});