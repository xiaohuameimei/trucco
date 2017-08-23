/*
* @Author: Marte
* @Date:   2017-07-06 16:49:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-06 16:50:09
*/

$(function(){
         $(".radio").on("click",function(){
            $(".addressList img").attr("src","images/radio1.png");
            $(this).children(".addressList").children("img").attr("src","images/radio2.png");
            // $(".addressList img") .attr("src","images/radio2.png");
         });
    });


    function returnBack(){
        window.history.go(-1);
    }