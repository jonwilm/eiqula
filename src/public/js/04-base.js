// Padding for Navbar
$(document).ready(function ($) {
  var navbar_height = $('.navbar').height();
  $('body').css("padding-top", navbar_height + 16);
  $(window).resize(function () {
    var navbar_height = $('.navbar').height();
    $('body').css("padding-top", navbar_height + 16);
  });
});