$(document).ready(function() {

    $("#nav-logo").fadeTo("slow", 0.7);

    $("#menu li").hover(function(){
        $(".dropdown-content", this).slideDown(100);
    }, function(){
        $(".dropdown-content", this).stop().slideUp(100);
    });
});