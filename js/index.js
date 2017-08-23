/*
* @Author: Marte
* @Date:   2017-07-06 16:42:34
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-06 16:44:52
*/

var initX = -1;
        $(function(){
            $(".carousel").on("touchstart",function(event){
                var touch = event.originalEvent.targetTouches[0];
                initX = touch.pageX;
            });
            $(".carousel").on("touchmove",function(event){
                var touch = event.originalEvent.targetTouches[0];
                var moveX = touch.pageX;
                if(moveX < initX){
                    $(".carousel").carousel('next');
                }else{
                    $(".carousel").carousel('prev');
                }
            });
        });