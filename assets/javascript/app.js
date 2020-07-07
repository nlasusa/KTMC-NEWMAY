// awards and achievements section //
$(function(){
    // vars for clients list carousel
     // http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
     var $clientcarousel = $('#clients-list');
     var clients = $clientcarousel.children().length;
     var clientwidth = (clients * 220); // 140px width for each client item 
     $clientcarousel.css('width',clientwidth);
     
     var rotating = true;
     var clientspeed = 0;
     var seeclients = setInterval(rotateClients, clientspeed);
     
     function rotateClients() {
       if(rotating != false) {
         var $first = $('#clients-list li:first');
         $first.animate({ 'margin-left': '-220px' }, 2000, "linear", function() {
           $first.remove().css({ 'margin-left': '0px' });
           $('#clients-list li:last').after($first);
         });
       }
     }
   });
   // end of awards and achievements section //

   // monthly inisghts section
   // ON CLICK EVENTS 
$("#imgi1").on('click', function(){
  window.location = "http://ktmc.com/webfiles/AprilMonthlyInsights2020%20(4).pdf";    
});
$("#imgi2").on('click', function(){
  window.location = "http://ktmc.com/files/23186_ktmc_bulletin_fall_l.pdf";    
});
$("#imgi3").on('click', function(){
  window.location = "http://ktmc.com/webfiles/KTMC%20Firm%20Brochure.PDF";    
});
$("#imgi4").on('click', function(){
  window.location = "http://ktmc.com/webfiles/KTMC%20SecuritiesTracker%20Brochure.pdf";    
});
$("#imgi5").on('click', function(){
  window.location = "http://ktmc.com/webfiles/PRIMER%20ON%20SHAREHOLDER%20LIT.pdf";    
});
$("#imgi6").on('click', function(){
  window.location = "https://ktmc.com/webfiles/Benchmark20.pdf";    
});
$("#imgi7").on('click', function(){
  window.location = "http://ktmc.com/webfiles/AprilMonthlyInsights2020%20(4).pdf";    
});
$("#imgi8").on('click', function(){
  window.location = "http://ktmc.com/webfiles/AprilMonthlyInsights2020%20(4).pdf";    
});
// end of monthly insights section

// social media buttons 
// ON CLICK EVENTS
$(".facebookBtn").on('click', function(){
  window.location = "https://www.facebook.com/KTMClaw/";    
});

$(".twitterBtn").on('click', function(){
  window.location = "https://twitter.com/ktmclaw?lang=en";    
});

$(".linkedinBtn").on('click', function(){
  window.location = "https://www.linkedin.com/company/kessler-topaz-meltzer-&-check-llp";    
});
// end of social media buttons