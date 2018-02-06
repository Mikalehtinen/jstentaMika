$(document).ready(function(){
  //on-click, animerar navigeringen till första artikelns ankare
  $('#nav1').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#article1').offset().top
    })
  })
  //on-click, animerar navigeringen till andra artikelns ankare
  $('#nav2').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#article2').offset().top
    })
  })
  //on-click, animerar navigeringen till tredje artikelns ankare
  $('#nav3').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#article3').offset().top
    })
  })
});
