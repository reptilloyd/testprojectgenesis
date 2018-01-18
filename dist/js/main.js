$('.slider-input').jRange({
    from: 18,
    to: 50,
    step: 1,
    format: '%s ',
    width: 180,
    showLabels: true,
    isRange : true,
    showScale : false,
    snap : true
});

$( '#nav-icon3' ).on( 'click', function() {

  if ( $( '#nav-icon3' ).hasClass( 'open' ) ) {
   $( '#nav-icon3' ).removeClass( 'open' );
  } else {
   $( '#nav-icon3' ).addClass( 'open' );
  }

  if ( $( '.responsive__nav' ).hasClass( 'open' ) ) {
   $( '.responsive__nav' ).removeClass( 'open' );
  } else {
   $( '.responsive__nav' ).addClass( 'open' );
  }
  });

$(".fav").click(function(){
  
   if ($(this).hasClass('active')) {
       $(this).removeClass("active");
       $(this).html('<span></span> Избранное')
   } else {
       $(this).addClass("active");
        $(this).html('<span></span> В избранных')
   }

});

$('.sort__profiles p').click(function(){
  $('.sort__profiles p').removeClass('active');
  $(this).addClass('active')
})

$('.delete').click(function(){
  $('#city').val('');
})

$('.pagination a:not(.pagination__arrow)').click(function(){
  $('.pagination a').removeClass('active');
  $(this).addClass('active');
})

$(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#up').is(':hidden')) {
                $('#up').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('#up').stop(true, false).fadeOut('fast'); }
    });
    $('#up').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });