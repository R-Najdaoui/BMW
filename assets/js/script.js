$(document).ready(function() {
    $(".video-square").on("contextmenu", function(e) {
        e.preventDefault();  

        var video = $(this).find('video');  
        var videoContainer = $(this);  

       
        videoContainer.addClass('no-hover'); 
        
        videoContainer.css({
            'z-index': 10  
        });

        video.stop().animate({
            width: "220px",  
            height: "150px", 
            top: "-30px",    
            left: "50%",     
            marginLeft: "-110px"  
        }, 300);  

        
        setTimeout(function() {
            video.stop().animate({
                width: "176px",   
                height: "176px",  
                top: "0",         
                left: "0",       
                marginLeft: "0"   
            }, 400);  

            videoContainer.css({'z-index': 0});
            videoContainer.removeClass('no-hover');  
        }, 3000);  
    });
});
