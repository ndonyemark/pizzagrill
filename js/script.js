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
        
        if(pizza1.size == 'small')
        {
            pizza_size_price += 200;
        }
        else if(pizza1.size == "medium")
        {
            pizza_size_price += 600;
        }
        else if(pizza1.size == "large")
         {
            pizza_size_price += 900;
        }
    
        if(pizza1.topping == "ham" || pizza_topping == "BBQ-chicken" || pizza_topping == "bacon" || pizza_topping =="beef")
        {
            pizza_topping_price += 150;
        }
        else if(pizza1.topping == "blue-cheese" || pizza_topping == "brie" || pizza_topping == "manchengo" || pizza_topping =="parmesan")
        {
            pizza_topping_price += 200;
        }
        else if(pizza1.topping == "carrots" || pizza_topping == "tomatoes" || pizza_topping == "peas" || pizza_topping =="olives")
        {
            pizza_topping_price += 100;
        }
    
        if(pizza1.crust == 'crispy')
        {
            pizza_crust_price += 50;
        }
        else if(pizza1.crust == "stuffed")
        {
            pizza_crust_price += 80;
        }
        else if(pizza1.crust == "gluten-free")
        {
            pizza_crust_price += 70;
        }

        var price = (pizza_size_price + pizza_topping_price + pizza_crust_price);
        var pizza_number = parseInt(pizza1.pizzaNo);
        var total_cost = price * pizza_number;
    });
});