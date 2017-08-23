/*
* @Author: Marte
* @Date:   2017-07-06 16:56:50
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-06 16:57:13
*/

var index = 0;//记录输入的input框
    $(function(){
         $(".radio_pay").on("click",function(){
            $(".payment img").attr("src","images/pay_radio2.png");
            $(this).children(".payment").children("img").attr("src","images/pay_radio1.png");
         });

        //  $(".inputPassword").on("focus",function(){
        //     $(this).blur();
        //     $($(".inputPassword")[index]).focus();
        // });
        //input 监听输入事件
        $(".inputPassword").on("input",function(){
            $(this).blur();//失去焦点
            index++;
            // console.log($(".inputPassword"));
            // console.log($(".inputPassword")[index]);
            // console.log($($(".inputPassword")[index]));
            $($(".inputPassword")[index]).focus();//获取焦点
        });


        $("#btn").on("click",function(){
            layer.confirm('是否确认付款?',{
                btn: ['确定','取消'],
            },function(){
                console.log("确定");
                 $("#myModal").modal("show");
                layer.closeAll();
            },function(){
                console.log("取消");
                 $("#myModal1").modal("show");
                layer.closeAll();
            });//询问框
        });
    });

    function returnBack(){
        window.history.go(-1);
    }
