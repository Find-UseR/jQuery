$(document).ready(function(){
    $("button").click(function(){
        $("#item1").fadeTo("slow", 0.20);
        $("#item2").fadeTo("slow", 0.10);
        $("#item3").fadeTo("slow", 0.5);
    });
});