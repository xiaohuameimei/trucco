/*
* @Author: Marte
* @Date:   2017-07-06 16:59:01
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-15 14:17:15
*/

$(function(){
        $(".sizeBtn").on("click",function(){
            $(".sizeBtn").removeClass("btnActive");
            $(this).addClass("btnActive");
        });
        $(".imgBtn").on("click",function(){
            $(".imgBtn").removeClass("btnActive");
            $(this).addClass("btnActive");
        });
        //绑定减号点击事件
        $("#minus").on("click",function(){
            var value = $("#count").val();//找到input框id为count的 的值
            value = value * 1;
            value -= 1;
            if(value <= 0 ){
                return;//强制执行完毕方法
            }
            $("#count").val(value);
        });
        //绑定加号点击事件
        $("#plus").on("click",function(){
            var value = $("#count").val();//找到input框id为count的 的值
            value = value * 1;
            value += 1;
            $("#count").val(value);
        });
        $("#count").on("input",function(){
            var v = String(this.value);
            if(v.indexOf(".") > -1){
                v = v.split(".")[0];
                this.value = v;
            }
        });
        $("#count").on("change",function(){
            var value = $(this).val();
            if(isNaN(value)){
                $(this).val(1);
                //input框的 .val() 方法 没有参数为取值 有参数为赋值
            };
            if( value<0 ){
                $(this).val(1);
                value = 1;
                //input框的 .val() 方法 没有参数为取值 有参数为赋值
            };
            if( value == "" ){
                $(this).val(1);
                value = 1;
                //input框的 .val() 方法 没有参数为取值 有参数为赋值
            };
        });

        $(".hoverImg").hover(function(){
            var smallImg = $(this).attr("src");
            $("#bigImg").attr("src",smallImg)
        },function(){

        })


        $(".sm_pic").on("mouseenter mouseleave",function(event){
            if(event.type == "mouseenter"){
                $(".sm_pic").removeClass("active");
                $(this).addClass('active');
            }else{

            }
        })
    });
    function returnBack(){
        window.history.go(-1);
    }