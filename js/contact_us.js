
var div1 = document.querySelector("#aa"); //aa是验证码div的ID
var code1 = new vCode(div1,{
    len: 5,             //验证码字体数量
    bgColor: "#feaa8b", //验证码背景颜色
    colors: [           //验证码字体颜色
        '#DDDDDD',
        '#DDFF77',
        '#77DDFF',
        '#99BBFF',
        '#7700BB',
        '#EEEE00',
        '#000507',
        '#980023',
        '#50001a',
    ]
});
function update(){
    code1.update();
}

function returnBack(){
        window.history.go(-1);
    }

