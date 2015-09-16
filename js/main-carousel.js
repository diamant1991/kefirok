$(document).ready(function() {
 
  var time = 7;
  var sync1 = $('#sync1');
  var sync2 = $('#sync2');
 
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
 

    $("#sync1").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging
    });
 
    
    function progressBar(elem){
      $elem = elem;
      buildProgressBar();
      start();
    }
 
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        if(percentTime >= 100){
          $elem.trigger('owl.next')
        }
      }
    }
 
    function pauseOnDragging(){
      isPause = true;
    }
 
    function moved(){
      clearTimeout(tick);
      start();
    }

sync2.owlCarousel({
    items : 3,
    pagination:false,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }


});

$(document).ready(function() {
 
  var newOwl = $("#new-carousel");
 
  newOwl.owlCarousel({
      items : 5,
      itemsDesktop : [1300,5],
      itemsDesktopSmall : [1200,4],
      itemsTablet: [1030,3],
      slideSpeed: 500,
      itemsMobile : [767,1]
  });

 $("#next").click(function(){
      newOwl.trigger('owl.next');
    })
    $("#prev").click(function(){
      newOwl.trigger('owl.prev');
    })
 
});

$(document).ready(function() {
 
  var newNews = $("#news-carousel");
 
  newNews.owlCarousel({
      items : 4,
      itemsDesktop : [1300,4],
      itemsDesktopSmall : [1200,3],
      itemsTablet: [1030,2],
      slideSpeed: 500,
      itemsMobile : [767,1]
  });

   $("#next-news").click(function(){
      newNews.trigger('owl.next');
    })
    $("#prev-news").click(function(){
      newNews.trigger('owl.prev');
    })
 
});