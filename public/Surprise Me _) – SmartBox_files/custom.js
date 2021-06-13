//Testimonial Slider
$('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive:{
    0:{
      items:1,
      nav: false,
      dots: true
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});


$(document).ready(function() { 
  $('.cart-button').click(function(event){
    event.preventDefault();
    ajaxCart.load();
    $('.drop-cart').addClass('open');
    $('body').addClass('open-cart');
  });
  
  $(document).bind('mouseup touchend', function(e){
    var container = $('.drop-cart');
    if ($('.drop-cart').hasClass('open')) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.drop-cart').removeClass('open');
        $('body').removeClass('open-cart');
      }
    }
  });
  
  $('.mobile_nav').click(function(){
    $('#mobile-sidebar').addClass('open');
    $('body').addClass('menu-drawe-open');
  });
  
  $('.mobile-nav-close').click(function(){
    $('#mobile-sidebar').removeClass('open');
    $('body').removeClass('menu-drawe-open');
  });

  $(document).bind('mouseup touchend', function(e){
    var container = $('.sidenav');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('#mobile-sidebar').removeClass('open');
      $('body').removeClass('menu-drawe-open');
    }
  });
  
  $('.site-nav--has-dropdown-grandchild').click(function(event){
    //event.preventDefault();
    $(this).find('.site-nav__dropdown-grandchild').toggleClass('active');
  });
  
  // This button will increment the value
  $('.qtyplus').click(function(e){
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $('input[name='+fieldName+']').val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $('input[name='+fieldName+']').val(0);
    }
  });
  // This button will decrement the value till 0
  $(".qtyminus").click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr('field');
    // Get its current value
    var currentVal = parseInt($('input[name='+fieldName+']').val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 1) {
      // Decrement one
      $('input[name='+fieldName+']').val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $('input[name='+fieldName+']').val(1);
    }
  });
  
  //	Accordion Section
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    }
  }
  
  
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
});


wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();

  
