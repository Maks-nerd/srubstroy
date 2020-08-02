$(document).ready(function() { 

 $('.call').click(function(){
    $('.b-popap2').fadeIn(700); return false;
  });
    $('.close').click(function(){
    $('.b-popap2').fadeOut(700); return false;
  });
   $('.b-popap2').click(function(e){
      if (e.target != this)
         return;
      $(".b-popap2").fadeOut(700); return false;
   });

    $('.consultation').click(function(){
    $('.b-popap').fadeIn(700); return false;
  });
    $('.close').click(function(){
    $('.b-popap').fadeOut(700); return false;
  });
   $('.b-popap').click(function(e){
      if (e.target != this)
         return;
      $(".b-popap").fadeOut(700); return false;
   });

   $("a.two").fancybox();

   $(".tel").mask("+7(999) 999-99-99"); 

});