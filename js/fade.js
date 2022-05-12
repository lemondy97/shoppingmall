
        $(function(){ 
            $(".small_bread img:nth-of-type(1)").hover(function(){
            $("#product1").fadeIn();
            $("#product2").hide();
            $("#product3").hide();
        });

        $(".small_bread img:nth-of-type(2)").hover(function(){
            $("#product2").fadeIn();
            $("#product1").hide();
            $("#product3").hide();
        });

        $(".small_bread img:nth-of-type(3)").hover(function(){
            $("#product3").fadeIn();
            $("#product1").hide();
            $("#product2").hide();

        });
    });