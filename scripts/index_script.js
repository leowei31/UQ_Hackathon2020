$(document).ready(function() {

    $("h1").fadeTo(4000, 0.9);
    $("#body-center-Btn").fadeTo("slow", 0.9);

    $("#body-center-Btn").hover(function(){
        $("#body-center-Btn").fadeTo("slow", 0.1);
    }, function () {
        $("#body-center-Btn").fadeTo("slow", 0.9);
    });
});