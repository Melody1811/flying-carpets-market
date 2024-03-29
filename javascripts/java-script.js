document.addEventListener("DOMContentLoaded", function() {

  let prev = 0
  document.getElementById("imgcircles").onclick = function() {
    anime({
      targets: '.circles',
      translateX: function() {
        return prev + anime.random(-10, 10)
      },
      translateY: function() {
        return prev + anime.random(-10, 10)
      },
      changeComplete: function(imgcircles) {
        prev = Number(imgcircles.animations[0].currentValue.slice(0,-10))
      }
    })

  }
  
  let bon = anime({
    targets: '.circles',
    translateY: '2vw',
    translateX: '2vw',
    easing: 'linear',
    // autoplay: false
  })

  
});


$(document).ready(function(){

  $( function() {
   $( ".drag1" ).draggable();
  });
  $(function() {
    $(".drag2").draggable();
  });
  $(function() {
    $(".drag3").draggable();
  });

});

$(document).ready(function () {
  $(".dust").click(function () {
      $(this).hide();
  });
});



$(document).ready(function(){
  $(document).mousemove(function(event){
    $(".cursor").css({
   left: event.pageX,
   top: event.pageY,
    })
    setTimeout(function(){
   $(".cursor2").css({
     left: event.pageX,
     top: event.pageY,
   });
    }, 20);
  });
});
   
$(document).ready(function(){
  $(".left1").hover(function(event){
    $(".cursor2").toggleClass("cursorchikClick");
  });
});

$(document).ready(function(){

  $( function() {
   $( ".rug01" ).draggable();
  });
  $(function() {
    $(".rug02").draggable();
  });
  $(function() {
    $(".rug03").draggable();
  });
  $( function() {
    $( ".rug04" ).draggable();
   });
   $(function() {
     $(".rug05").draggable();
   });
   $(function() {
     $(".rug06").draggable();
   });
   $( function() {
    $( ".rug07" ).draggable();
   });
   $(function() {
     $(".rug08").draggable();
   });
   
});

