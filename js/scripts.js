$(document).ready(function() {
  $("a.click").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });

  $(" aside nav.service_content li a").click(function(){
    var dom_dom = $(" aside nav.service_content li a");
    if (dom_dom.hasClass("active4")) {
     $(" aside nav.service_content li a").removeClass("active4");
     };
      $(this).addClass("active4");
  });
  // $(".hov_img").hover(
  //    function () {
  //        $(".three .right a").addClass("hov_img_effect");
  //     },
  //     function () {
  //               $(".three .right a").removeClass("hov_img_effect");
  //     }
  //   );
  var scroll = $("aside nav.service_content");
   $(window).scroll(function(){
  if ($(window).scrollTop()>=300) {
       scroll.addClass('fix');
  }
  else scroll.removeClass('fix');
 });

   $('.phone').hover(function() {
     $('header nav.main-nav').animate({'margin-left': 0}, 'slow');
     $('header nav.main-nav li').animate({'margin-left': '3px', 'margin-right': '3px'}, 'slow')

   }, function() {
     $('header nav.main-nav').animate({'margin-left': '10%'}, 'slow')
     $('header nav.main-nav li').animate({'margin-left': '20px', 'margin-right': '20px'}, 'slow')
   });

   $('.phone').hover(function() {
     $('header.service nav').animate({'margin-left': 0}, 'slow');
     $('nav.service li a').animate({'padding-right': '0'}, 'slow');

   }, function() {
     $('header nav').animate({'margin-left': '10%'}, 'slow')
    $('nav.service li a').animate({'padding-right': '20px'}, 'slow');
   });

  

  

});
