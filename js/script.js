$(document).ready(function(){
    $("button.deliver-method").click(function(){
        // alert("clicked");
       
        $(".order-type").toggle();
        $(".deliver").toggle();
    });
    $(".deliver form").submit(function(event){
        event.preventDefault();

        var pizza_size = $("select#size option:selected").val();
        var pizza_topping = $("select#topping option:selected").val();
        var pizza_crust = $("select#crust option:selected").val(); 
        var pizzas = $("input#no_of_pizza").val();
    });
});