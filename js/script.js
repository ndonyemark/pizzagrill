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

        var pizzaInfo = function Pizza(size, topping, crust, pizzaNo){
            this.size = size;
            this.topping = topping;
            this.crust = crust;
            this.pizzaNo = pizzaNo;
        }

        pizza1 = new pizzaInfo(pizza_size, pizza_topping, pizza_crust, pizzas);

        var pizza_size_price = 0;
        var pizza_topping_price = 0;
        var pizza_crust_price = 0;

        
    });
});