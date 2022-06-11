

$(document).ready(function(){
  
  $('.menu-toggle').click(function() {
  
    $('.site-nav').toggleClass('site-nav--open', 1500);
    $(this).toggleClass('open');
    // $(this) = hamburger menu Nav Trigger

    
  });
});


