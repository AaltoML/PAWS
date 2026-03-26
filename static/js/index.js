window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Toggle navbar burger on mobile
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Initialize Bulma carousel
    var options = {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
    };
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Initialize Bulma slider
    bulmaSlider.attach();
});
