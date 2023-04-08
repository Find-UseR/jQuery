$(document).ready(function(){
    $("button").click(function(){
        $("#item1").fadeIn();
        $("#item2").fadeIn("slow");
        $("#item3").fadeIn(3000);
    });
});