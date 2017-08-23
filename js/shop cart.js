var shopCount = 0;//商品总数
var shopTotal = 0;
    $(function(){
        //绑定减号点击事件
        $(".minus").on("click",function(){
            var index = $(this).attr("index");//获取自定义属性的index
            var value = $($(".count")[index]).val();//找到input框id为count的 的值
            value = value * 1;
            value -= 1;
            if(value <= 0 ){
                return;//强制执行完毕方法
            }
            $($(".count")[index]).val(value);
            var unitPrice = calculationPrice(index,value);//获取单价
            var flag = $($(".shopCheck ")[index]).hasClass("selected");
            if(flag){
                shopTotal -= (unitPrice * 1);
                $("#total").text(shopTotal+".00");
            }
        });
        //绑定加号点击事件
        $(".plus").on("click",function(){
            var index = $(this).attr("index");//获取自定义属性的index
            var value = $($(".count")[index]).val();//找到input框id为count的 的值
            value = value * 1;
            value += 1;
            $($(".count")[index]).val(value);
            var unitPrice = calculationPrice(index,value);//获取单价
            var flag = $($(".shopCheck ")[index]).hasClass("selected");
            if(flag){
                shopTotal += (unitPrice * 1);
                $("#total").text(shopTotal+".00");
            }
        });
        $(".count").on("input",function(){
            var v = String(this.value);
            if(v.indexOf(".") > -1){
                v = v.split(".")[0];
                this.value = v;
            }
        });
        $(".count").on("change",function(){
            var value = $(this).val();
            if(isNaN(value)){
                $(this).val(1);
                value = 1;
                //input框的 .val() 方法 没有参数为取值 有参数为赋值
            };
            if( value < 0 ){
                $(this).val(1);
                value = 1;
                //input框的 .val() 方法 没有参数为取值 有参数为赋值
            };
            if( value == "" ){
                $(this).val(1);
                value = 1;
                //input框的 .val() 方法 没有参数为取值 有参数为赋值
            };
            var index = $(this).attr('index');
            var oldPrice;
            if($($(".shopCheck")[index]).hasClass("selected")){
                oldPrice = $($(".price")[index]).text() * 1;
            }
            var price = calculationPrice(index,value) * 1;
            if(oldPrice != undefined){
                var t = value * (price * 1);
                shopTotal -= oldPrice;
                shopTotal += t;
                $("#total").text(shopTotal + ".00");
            }
        });

        $(".shopCheck").on("click",function(){
            if($(this).hasClass("selected")){
                $(this).removeClass("selected");
                shopCount--;
                var index = $(this).attr('index');
                var price = $($(".price")[index]).text();
                shopTotal -= (price*1);
            $("#total").text(shopTotal+".00");
            }else{
                $(this).addClass("selected");
                shopCount++;
                var index = $(this).attr('index');
                var price = $($(".price")[index]).text();
                shopTotal += (price*1);
                $("#total").text(shopTotal+".00");
            }
            $("#shopNumber").text(shopCount);
            var length = $(".shopCheck.selected").length;
            var shopList = $("#shopList tr").length;
            if( shopList == length){
                $(".selectAll").addClass("selected");
            }else{
                 $(".selectAll").removeClass("selected");
            }

        });
        $(".selectAll").on("click",function(){
             if($(this).hasClass("selected")){
                $(this).removeClass("selected");
                    if($(".shopCheck").hasClass("selected")){
                        $(".shopCheck").removeClass("selected");
                    }
                    shopTotal = 0;
                    shopCount = 0;
                    $("#total").text(shopTotal+".00");
                    $("#shopNumber").text(shopCount);
            }else{
                $(this).addClass("selected");
                var length = $(".shopCheck").length;
                for(var i = 0 ; i < length ; i++){
                    if($($(".shopCheck")[i]).hasClass("selected")){
                        continue;
                    }
                    $($(".shopCheck")[i]).addClass("selected");
                    var index = $($(".shopCheck")[i]).attr('index');
                    var price = $($(".price")[index]).text();
                    shopTotal += (price*1);
                    shopCount = length ;
                    $("#total").text(shopTotal+".00");
                    $("#shopNumber").text(shopCount);
                }
            }
        });


        //手机微端
         $(".shopCheck2").on("click",function(){
            if($(this).hasClass("selected")){
                $(this).removeClass("selected");
                shopCount--;
                var index = $(this).attr('index');
                var price = $($(".price")[index]).text();
                shopTotal -= (price*1);
            $("#total").text(shopTotal+".00");
            }else{
                $(this).addClass("selected");
                shopCount++;
                var index = $(this).attr('index');
                var price = $($(".price")[index]).text();
                shopTotal += (price*1);
                $("#total").text(shopTotal+".00");
            }
            $("#shopNumber").text(shopCount);
            var length = $(".shopCheck2.selected").length;
            var shopList = $("#shopList tr").length;
            console.log (shopList);
            if( shopList == length){
                $(".selectAll2").addClass("selected");
            }else{
                 $(".selectAll2").removeClass("selected");
            }
        });

         $(".selectAll2").on("click",function(){
             if($(this).hasClass("selected")){
                $(this).removeClass("selected");
                    if($(".shopCheck2").hasClass("selected")){
                        $(".shopCheck2").removeClass("selected");
                    }
                    shopTotal = 0;
                    shopCount = 0;
                    $("#total").text(shopTotal+".00");
                    $("#shopNumber").text(shopCount);
            }else{
                $(this).addClass("selected");
                var length = $(".shopCheck2").length;
                console.log(length)
                for(var i = 0 ; i < length ; i++){
                    if($($(".shopCheck2")[i]).hasClass("selected")){
                        continue;
                    }
                    $($(".shopCheck2")[i]).addClass("selected");
                    var index = $($(".shopCheck2")[i]).attr('index');
                    var price = $($(".price")[index]).text();
                    shopTotal += (price*1);
                    shopCount = length ;
                    $("#total").text(shopTotal+".00");
                    $("#shopNumber").text(shopCount);
                }
            }
        });
    });
    //计算价格
    function calculationPrice(index,num){
        var unitPrice = $($(".unitPrice")[index]).text();//获取单价
        var price = (unitPrice * 1) * num;
        $($(".price")[index]).text(price + ".00");
        return unitPrice;
    };
    function returnBack(){
        window.history.go(-1);
    };
    function deleteList(btn){
        var mymessage=confirm("确定要删除吗？") ;
        if(mymessage==true){
            var index = $(btn).attr("index");
            if($($(".shopCheck")[index]).hasClass("selected")){
                shopTotal -= $($(".price")[index]).text() * 1;
                $("#total").text(shopTotal + ".00");
                shopCount--;
                $("#shopNumber").text(shopCount);
            }
            $($("#shopList tr")[index]).remove();
            for(var i = 0 ; i < $(".delete").length ; i++){
                $($(".delete")[i]).attr("index",i);
                $($(".shopCheck")[i]).attr("index",i);
            }
            if($("#shopList tr").length == 0){
                $(".selectAll ").removeClass("selected");
            }
        }
        var length = $(".shopCheck.selected").length;
        var shopList = $("#shopList tr").length;
        if( shopList == length){
            $(".selectAll").addClass("selected");
        }
         if (shopList == 0){
                $(".selectAll").removeClass("selected");
            }
    }

    function deleteList_xs(btn){
        var mymessage=confirm("确定要删除吗？") ;
        if(mymessage==true)
        {
            var index = $(btn).attr("index");
            if($($(".shopCheck2")[index]).hasClass("selected")){
                shopTotal -= $($(".price")[index]).text() * 1;
                $("#total").text(shopTotal + ".00");
                shopCount--;
                $("#shopNumber").text(shopCount);
            }
            $($("#shopList_xs tr")[index]).remove();
            for(var i = 0 ; i < $(".delete1").length ; i++){
                $($(".delete1")[i]).attr("index",i);
                $($(".shopCheck2")[i]).attr("index",i);
            };
            if($("#shopList_xs tr").length == 0){
                $(".selectAll2").removeClass("selected");
            }
        }
            var length = $(".shopCheck2.selected").length;
            var shopList = $("#shopList_xs tr").length;
            if( shopList == length){
                $(".selectAll2").addClass("selected");
            }
            if (shopList == 0){
                $(".selectAll2").removeClass("selected");
            }
    };
