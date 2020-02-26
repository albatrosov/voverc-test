$(function(){

  // ==MAIN SCRIPTS==
  $('[data-toggle="tooltip"]').tooltip();

  $('.plan .custom-radio').on('click', function(){
    $('.plan').removeClass('plan--selected');
    $(this).parents('.plan').toggleClass('plan--selected');
  });

  // much easier than customize bootstrap label 
  $('.plan .custom-radio span').on('click', function(){
    $(this).prevAll('input[type="radio"]').prop('checked', true);
  });

  $('.mobile_menu').on('click', function(){
    $(this).siblings('nav').addClass('opened');
  });

  $('.mobile_menu__close').on('click', function(){
    $(this).parent('nav').removeClass('opened');
  });

})
  