  var top_show = 300;
  var delay = 1000; 
  $(document).ready(function() {
    $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
});


/*$(".slct").each(function (){
    var dropBlock = $(this).parent().find('.drop').find('li.active');
    var selectResult = dropBlock.html();
    dropBlock.parent().parent().find('input').val(selectResult);
    dropBlock.parent().parent().find('.slct').removeClass('active').html(selectResult);
})*/

$('.slct-cat').click(function(){
   var dropBlock = $(this).parent().find('.drop-cat');

   if( dropBlock.css('opacity') == '0' ) {
      /*dropBlock.slideDown(150);*/
      dropBlock.addClass('active')

      $(this).addClass('active');
      $('.drop-cat-child').find('li').click(function(){
         var selectResult = $(this).find('.choice-item').html();
         $(this).parent().parent().parent().parent().find('#select-cat').val(selectResult);
         $(this).parent().parent().parent().parent().find('.slct-cat').removeClass('active').html(selectResult);

         dropBlock.removeClass('active')
         /*dropBlock.slideUp(150);*/
      });
   
   } else {
      $(this).removeClass('active');
      dropBlock.removeClass('active')
      /*dropBlock.slideUp(150);*/
   }

   return false;
});

$(document).mouseup(function (e) {
    var container = $(".drop-cat");
    if (container.has(e.target).length === 0){
        /*container.slideUp(150);*/
        container.removeClass('active')
        $('.slct-cat').removeClass('active');
    }
});

jQuery(function($){
   $(".tel").mask("+7 (999) 999-9999");
});