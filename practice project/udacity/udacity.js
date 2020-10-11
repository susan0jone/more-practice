$(function () {
    var erase = $('.times');
    var notify = $('.notify');
    var enterprise = $('#enterprise');
    var career = $('#career');
    var program = $('#program');
    $('.previous').css('visibilty',"hidden")
   
    
    erase.click(function (){
    notify.remove();
        
    });

    enterprise.click(
        function (){
            $('#enterprise span').toggle();
            $('.enterprise-content').toggle();
            enterprise.toggleClass('nav-class');
        }
    )
    career.click(
        function (){
            $('#career span').toggle();
            $('.career-content').toggle();
            career.toggleClass('nav-class');
        }
    )
    program.click(
        function (){
            $('#program span').toggle();
            $('.first').toggle();
            program.toggleClass('nav-class');
        }
    )
    $('.programming').hover(
        function (){
            $('.second').toggle();
        }
    )
    $('.programs .next').click(
        function(){
            $('.images').animate({"scrollLeft" : "+=300"}, 000 , "swing")
           $('.programs .previous').css("visibility", "visible");
     }
    )
    $('.programs .previous').click(
        function (){
         $('.images').animate({"scrollLeft" : "+=-300"}, 000 , "swing")
             if ($('.images').scrollLeft() === 0){
                $('.programs .previous').css("visibility", "hidden");

            } 
        }
      
    )
    $('.data-science .next').click(
        function(){
            $('.data-science .images').animate({"scrollLeft" : "+=300"}, 000 , "swing")
           $('.data-science .previous').css("visibility", "visible");

     }
    )
    $('.data-science .previous').click(
        function (){
         $('.data-science .images').animate({"scrollLeft" : "+=-300"}, 000 , "swing")
         if ($('.data-science .images').scrollLeft() === 0){
            $('.data-science .previous').css("visibility", "hidden");
            
        }
        }
      
    )
    $('.artificial-intelligence .next').click(
        function(){
            $('.artificial-intelligence .images').animate({"scrollLeft" : "+=300"}, 000 , "swing")
           $('.artificial-intelligence .previous').css("visibility", "visible");
     }
    )
    $('.artificial-intelligence .previous').click(
        function (){
         $('.artificial-intelligence .images').animate({"scrollLeft" : "+=-300"}, 000 , "swing")
         if ($('.artificial-intelligence .images').scrollLeft() === 0){
            $('.artificial-intelligence .previous').css("visibility", "hidden");
        }
        }
      
    )
    $('.business .next').click(
        function(){
            $('.business .images').animate({"scrollLeft" : "+=300"}, 000 , "swing")
           $('.business .previous').css("visibility", "visible");

     }
    )
    $('.business .previous').click(
        function (){
         $('.business .images').animate({"scrollLeft" : "+=-300"}, 000 , "swing")
         if ($('.business .images').scrollLeft() === 0){
            $('.business .previous').css("visibility", "hidden");
        }
        }
      
    )
    $('.cloud-computing .next').click(
        function(){
            $('.cloud-computing .images').animate({"scrollLeft" : "+=300"}, 000 , "swing")
           $('.cloud-computing .previous').css("visibility", "visible");
     }
    )
    $('.cloud-computing .previous').click(
        function (){
         $('.cloud-computing .images').animate({"scrollLeft" : "+=-300"}, 000 , "swing")
         if ($('.cloud-computing .images').scrollLeft() === 0){
            $('.cloud-computing .previous').css("visibility", "hidden");
        }
        }
      
    )
    $('.autonomous-vehicles .next').click(
        function(){
            $('.autonomous-vehicles .images').animate({"scrollLeft" : "+=300"}, 000 , "swing")
           $('.autonomous-vehicles .previous').css("visibility", "visible");
     }
    )
    $('.autonomous-vehicles .previous').click(
        function (){
         $('.autonomous-vehicles .images').animate({"scrollLeft" : "+=-300"}, 000 , "swing")
         if ($('.autonomous-vehicles .images').scrollLeft() === 0){
            $('.autonomous-vehicles .previous').css("visibility", "hidden");
        }
        }
      
    )
    
    $('.data-science').click(
        function (){
            $('.pointer').css("visibility","hidden");
            $('.data-science .pointer').css("visibility","visible");
            $('.data').hide();
            $('.data-science .data').show();
            
            
        }
    )
    $('.artificial-intelligence').click(
        function (){
            $('.pointer').css("visibility","hidden");
            $('.artificial-intelligence .pointer').css("visibility","visible");
            $('.data').hide();
            $('.artificial-intelligence .data').show();
        }
    )
    $('.business').click(
        function (){
            $('.pointer').css("visibility","hidden");
            $('.business .pointer').css("visibility","visible");
            $('.data').hide();
            $('.business .data').show();
        }
    )
    $('.cloud-computing').click(
        function (){
            $('.pointer').css("visibility","hidden");
            $('.cloud-computing .pointer').css("visibility","visible");
            $('.data').hide();
            $('.cloud-computing .data').show();
        }
    )
    $('.autonomous-vehicles').click(
        function (){
            $('.pointer').css("visibility","hidden");
            $('.autonomous-vehicles .pointer').css("visibility","visible");
            $('.data').hide();
            $('.autonomous-vehicles .data').show();
        }
    )
    $('.programs').click(
        function (){
            $('.pointer').css("visibility","hidden");
            $('.programs .pointer').css("visibility","visible");
            $('.data').hide();
            $('.programs .data').show();
        }
    )
    $(window).scroll(
        function () {
            if ($(this).scrollTop() > 250){
                $('.nav').slideDown( "1000" );
            }
            else {
                $('.nav').hide();
            }
        }
    )
    $(document).click(
        function (event){
            var enterpriseTrigger = $("#enterprise");
            var careerTrigger = $("#career");
            var programTrigger = $('#program')
            
            //for it not to be triggered, this means the event.target
            // doesn't equal the trigger
            if(enterpriseTrigger !== event.target && !enterpriseTrigger.has(event.target).length){
                $('.enterprise-content').hide();
                enterprise.removeClass('nav-class');
                $('#enterprise span').show();
                $('.enterprise-hide').hide();
            } 
            if(careerTrigger !== event.target && !careerTrigger.has(event.target).length){
                $('.career-content').hide();
                career.removeClass('nav-class');
                $('#career span').show();
                $('.career-hide').hide();
            }  
            if(programTrigger !== event.target && !programTrigger.has(event.target).length){
                $('.first').hide();
                program.removeClass('nav-class');
                $('#program span').show();
                $('.program-hide').hide();
            }            
            }
        
    )
    
   
 

   

















    


})


