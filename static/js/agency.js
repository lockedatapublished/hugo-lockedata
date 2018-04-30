// Smooth scrolling via animate()
$(document).ready(function(){
  if ($("body").attr("home")) {
    $("a").on('click', function(event) {
      if (this.hash) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  }
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 150;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function(){

  $('form[id=contactForm] #success').hide();
  $('form[id=contactForm] #error').hide();

  $.ajax({
    type: 'POST',
    url: $(this).attr('action'),
    data: $(this).serialize(),
    success: function (data, textStatus) {
      if (jqXHR.status === 200) {
        $('form[id=contactForm] #success').show();
      } else {
        $('form[id=contactForm] #error').show();
      }
    },
    dataType: 'json'
  });


  /*$.post($(this).attr('action'), $(this).serialize(), function(data, textStatus, jqXHR){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();

    if (jqXHR.status == 200) {
      $('form[id=contactForm] #success').show();
    } else {
      $('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #error').show();
    }

  }, 'json').fail(function(){
      $('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #error').show();
  });
  return false;
});*/

// Contact form validation
$('form[id=contactForm]').validate({
  modules : 'html5, toggleDisabled'
});