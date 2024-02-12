$(document).ready(function(){
    let growFactor = 1; 
    let interval;

    function increaseSize() {
        growFactor += 0.5; 
        $("#si").css("transform", "scale(" + growFactor + ")"); 
    }

    $("#no").click(function(){
        increaseSize(); 
    });

    $("#si").click(function(){
        clearInterval(interval); 
        window.location.href = "/valentine2.html";
    });

    $(".valentine").mouseenter(function(){
        $(".carta").stop().animate({
            top:"-80px"
        },"slow");
    }).mouseleave(function(){
        $(".carta").stop().animate({
            top:0
        },"slow");
    });
});
