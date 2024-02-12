$(document).ready(function(){
    $(".valentine").mouseenter(function(){
        $(".carta").stop().animate({
            top:"-100px"
        },"slow");
    }).mouseleave(function(){
        $(".carta").stop().animate({
            top:0
        },"slow");
    });
    });
    