$(function(){
    $("#load").click(function(){
        $.get("task2.txt", function(Response){
            $("#result").empty();
            $("#result").append(Response);
        });
    });
});