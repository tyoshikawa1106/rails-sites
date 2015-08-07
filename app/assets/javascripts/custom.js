var $j = jQuery.noConflict();
$j(document).ready(function(){
  // bxSlider
  $j('.bxslider').bxSlider({
    auto: true,
    speed: 1000,
    pause: 4000,
    mode: 'fade'
  });
});