$(document).ready(function(){
    $("button.deliver-method").click(function(){
        // alert("clicked");
       
        $(".order-type").toggle();
        $(".deliver").toggle();
    });
    $(".deliver form").submit(function(event){
        event.preventDefault();
    });
});