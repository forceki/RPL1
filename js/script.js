$(document).ready(function(){


//animai toggle
 $('.container').click(function(){
    $('.container').toggleClass('change');
     $('.nav').toggleClass('appear');
  });


//animasi navbar

 $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('nav-scrolled');
      $('ul li:first-child').addClass('fade');
       $('ul li:first-child').addClass('in');
    } else {
      $('nav').removeClass('nav-scrolled');
      $('ul li:first-child').removeClass('fade');
       $('ul li:first-child').removeClass('in');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('nav').addClass('nav-scrolled');
    $('ul li:first-child').addClass('fade');
     $('ul li:first-child').addClass('in');
  };
  //for-info-profil

  $('.min-container').on("click",function(){
    if($(event.target).hasClass('guru')){
      $('#buNur').removeClass('none');
    } else if ($(event.target).hasClass('fadhil')) {
      $('#fadhil').removeClass('none');
    } else if ($(event.target).hasClass('icad')) {
      $('#icad').removeClass('none');
    } else if ($(event.target).hasClass('sabrin')) {
      $('#sabrin').removeClass('none');
    } else if ($(event.target).hasClass('shan')) {
      $('#shan').removeClass('none');
    } else if ($(event.target).hasClass('elsa')) {
      $('#elsa').removeClass('none');
    } else if ($(event.target).hasClass('qin')) {
      $('#qin').removeClass('none');
    }
 });

  $('.box-small').click(function(){
    $('body').addClass('overflow');
    $('.main-container').addClass('dark');
     $('#hid').addClass('hide');
    $('.info-none').removeClass('none');
    $('.nav').removeClass('appear');
    $('.container').removeClass('change');
  });

$('.fas').click(function(){
    $('.human').addClass('none');
    $('body').removeClass('overflow');
    $('.main-container').removeClass('dark');
    $('.info-none').addClass('none');
    $('#hid').removeClass('hide');

});
         /*  LightSlider  */
      $(document).ready(function() {
        $('#slider-first').lightSlider({
            autoWidth:true,
            loop:true,
            keyPress:true,

            onSliderLoad: function() {
                $('#slider-first').removeClass('cS-hidden');
            } 
        });  

         $('#slider-second').lightSlider({
            autoWidth:true,
            loop:true,
            keyPress:true,
            
            onSliderLoad: function() {
                $('#slider-second').removeClass('cS-hidden');
            } 
        }); 

         $('#slider-third').lightSlider({
            autoWidth:true,
            loop:true,
            keyPress:true,
            
            onSliderLoad: function() {
                $('#slider-third').removeClass('cS-hidden');
            } 
        }); 


      });

  


});