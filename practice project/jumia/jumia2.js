$(function (){
    var slideIndex = 0;
    var i;
    var slides = $(".mySlides");
    var dots = $(".dot");
    var supermarket = $('.supermarket');
    var superMarket = $('.Super-market');
    var latter = $('.latter');
    var former = $('.former');
    var counter = 0;
    var arrow = $('.arrow');
    latter.css('visibility', "hidden")
    former.css('visibility', "hidden")
    superMarket.hide();
    
    function display(){
      plusSlides(1);
    }
    
   var interval = setInterval(display , 3000);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    $('.next').click(function(){
       clearInterval(interval);
     plusSlides(1);
     interval = setInterval(display , 3000);


    })
    $('.prev').click(function (){
        clearInterval(interval);
      plusSlides(-1);
      interval = setInterval(display , 3000);

    })
    $('.dot-one').click(function (){
      clearInterval(interval);
      currentSlide(0);
      interval = setInterval(display , 3000);
     
     
    })
    $('.dot-two').click(function (){
       clearInterval(interval);
      currentSlide(1);
      interval = setInterval(display , 3000);
     
    })
    $('.dot-three').click(function (){
     clearInterval(interval);
      currentSlide(2);
      interval = setInterval(display , 3000);
     
    })
    
    
    function showSlides(n) {
    if (n > slides.length-1) {slideIndex = 0} 
    
    if (n < 0) {slideIndex = slides.length-1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slideIndex);
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";
 
    
  }

    supermarket.hover(function () {
        superMarket.toggle();
        $('.slider-body').toggle();
     
    });

    latter.click(
        function(){
            $('.adSlider').animate({"scrollLeft" : "+=300"}, 1000 , "swing")
      }
    )
    former.click(
        function (){
         $('.adSlider').animate({"scrollLeft" : "+=-400"}, 1000 , "swing")
        }
        
    )
    $('.ad-slider-title').hover(
        function (){
            if ($('.adSlider').scrollLeft() === 0){
               former.css('visibility', "hidden")
               latter.css('visibility', "visible")
                
            }else {
                latter.css('visibility', "visible")
                former.css('visibility', "visible")
            }
        }, function (){
             latter.css('visibility', "hidden")
             former.css('visibility', "hidden")
        }
    )
 arrow.click(
     function (){
        $('html').animate({"scrollTop" : "0"}, 1000 , "swing")
     }
 )
 $('#logIn').click(
     function (){
        $('#logIn span').toggle();
        $('.login-info').toggle();
     }
 )
 $('#help').click(
    function (){
       $('#help span').toggle();
       $('.help-info').toggle();
    }
)
$(window).scroll(
    function () {
        if ($(this).scrollTop() > 300){
            $('.arrow').show();
        }
        else {
            $('.arrow').hide();
        }
    }
)
$(document).click(
    function (event){
        var loginTrigger = $("#logIn");
        var helpTrigger = $("#help");
        
        //for it not to be triggered, this means the event.target
        // doesn't equal the trigger
        if(loginTrigger !== event.target && !loginTrigger.has(event.target).length){
            $('.login-info').hide();
            $('#logIn span').show();
            $('.hide').hide();
        } 
        if(helpTrigger !== event.target && !helpTrigger.has(event.target).length){
            $('.help-info').hide();
            $('#help span').show();
            $('.show').hide();
        }         
        }
    
)


  
   
}
   
);
