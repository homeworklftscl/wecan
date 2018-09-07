// скролл до 2 секции
import 'slick-carousel';
$(document).ready(function() {
  $('.scroll-btn').click(function() {
    $('html, body').animate({ scrollTop: $('#order').position().top }, 1000);
  });
});
