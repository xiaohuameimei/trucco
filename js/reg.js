/*
* @Author: Marte
* @Date:   2017-07-09 14:19:39
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-09 14:29:10
*/
    $(function(){
        $(".aggress").on("click",function(){
            $(".check").toggleClass("click");
        })
    })
    function returnBack(){
        window.history.go(-1);
    }