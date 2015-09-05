$(document).ready(function(){

      $('.scrollbox').scrollbox({
         direction: 'h',
         switchItems: 4,
         distance: 716
      });
      
      $('#partners .nav .prev').click(function () {
         $('.scrollbox').trigger('backward');
      });

      $('#partners .nav .next').click(function () {
         $('.scrollbox').trigger('forward');
      });
})

$(document).ready(function() {

      var Height = $("#events ul").height();
      var WrapperHeight = $("#events ul li .wrapper").height();
      var BottomHeight = $("#events ul li .bottom").height();

      //alert(WrapperHeight);
      //$("#events ul").css({"max-height": + Height + "px"});
      //$("#events ul").children("li").css({"height": + Height + "px"});
      $("#events ul").children("li").children(".table-cell").css({"height": + Height + "px"});
      $("#events ul").children("li").children(".table-cell").children(".wrapper").css({"margin-top": "0px"});

      $("#events nav .toStart").click(function() {
         $("#events nav .toStart").removeClass("active");
         $(this).addClass("active");
      });

      

         // -------------------------------------------------------------
         //   Basic Navigation
         // -------------------------------------------------------------
         
         (function () {
            var $frame  = $('.events-wrapper');
            var $slidee = $frame.children('ul').eq(0);
            var $wrap   = $frame.parent();
      
            // Call Sly on frame
            $frame.sly({
               horizontal: 1,
               itemNav: 'basic',
               smart: 1,
               activateOn: 'click',
               mouseDragging: 1,
               touchDragging: 1,
               releaseSwing: 1,
               startAt: 0,
               scrollBar: $wrap.find('.scrollbar'),
               scrollBy: 0,
               pagesBar: $wrap.find('.pages'),
               activatePageOn: 'click',
               speed: 300,
               elasticBounds: 1,
               easing: 'easeOutExpo',
               dragHandle: 1,
               dynamicHandle: 0,
               clickBar: 1,
      
               // Buttons
               forward: $wrap.find('.forward'),
               backward: $wrap.find('.backward'),
               prev: $wrap.find('.prev'),
               next: $wrap.find('.next'),
               prevPage: $wrap.find('.prevPage'),
               nextPage: $wrap.find('.nextPage')
            });
      
            // To Start button
            $wrap.find('.toStart').on('click', function () {
               var item = $(this).data('item');
               // Animate a particular item to the start of the frame.
               // If no item is provided, the whole content will be animated.
               $frame.sly('toStart', item);
            });
      
            // To Center button
            $wrap.find('.toCenter').on('click', function () {
               var item = $(this).data('item');
               // Animate a particular item to the center of the frame.
               // If no item is provided, the whole content will be animated.
               $frame.sly('toCenter', item);
            });
      
            // To End button
            $wrap.find('.toEnd').on('click', function () {
               var item = $(this).data('item');
               // Animate a particular item to the end of the frame.
               // If no item is provided, the whole content will be animated.
               $frame.sly('toEnd', item);
            });
      
            // Add item
            $wrap.find('.add').on('click', function () {
               $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
            });
      
            // Remove item
            $wrap.find('.remove').on('click', function () {
               $frame.sly('remove', -1);
            });
         }());
   });